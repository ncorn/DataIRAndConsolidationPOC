class Cluster
{
    constructor(indvArray, irMatchKey, uidMode, consolidationMode, consolidationSortKeys)
    {
        this.uidMode = uidMode;
        this.consolidationMode = consolidationMode;
        this.consolidationSortKeys = consolidationSortKeys;
        this.matchValue = indvArray[0][irMatchKey];
        this.clusterId = hashString(indvArray[0][irMatchKey]);
        this.individuals = indvArray;
        this.UnifiedContactPointEmail = [];
        this.delta = 'unchanged';
        this.UID = this.getUnifiedIndividual().UID;
    }

    getComputedData()
    {
        return {
            clusterId: this.clusterId,
            UID: this.UID,
            matchValue: this.matchValue,
            individuals: deepClone(this.individuals),
            unifiedContactPointsEmail: this.generateClusteredContactPoints(),
            collapsedConsent: this.getCollapsedConsent(),
            delta: 'unchanged'
        }
    }

    getUnifiedIndividual()
    {
        let tmpReconciledIndv = this.getReconciledAttributes(this.consolidationMode, this.consolidationSortKeys);

        if(this.uidMode == 'Cluster')
        {
            tmpReconciledIndv.UID = this.clusterId;
        }
        else if(this.uidMode == 'Member')
        {
            tmpReconciledIndv.UID = tmpReconciledIndv.id;
        }

        delete tmpReconciledIndv.id;

        return tmpReconciledIndv;
    }

    getUnifiedEmailClusterByCPEmailId(ContactPointEmailId)
    {
        let unifiedCPEmail = this.generateClusteredContactPoints();

        for(let unCPIdx in unifiedCPEmail)
        {
            let curUCP = unifiedCPEmail[unCPIdx];

            if(curUCP.containsId(ContactPointEmailId))
            {
                return curUCP;
            }
        }
    }

    getUnifiedCPEmailIndividualsByCPEmailID(cpEmailId)
    {
        let uCPEmail = this.getUnifiedEmailClusterByCPEmailId(cpEmailId);
        let ids = uCPEmail.getIndividualIds();
        let individuals = this.getIndvsById(ids);

        return individuals;
    }

    getIndvById(individualId)
    {
        for(let idx in this.individuals)
        {
            if(this.individuals[idx].id == individualId)
            {
                return this.individuals[idx];
            }
        }
    }

    getIndvsById(individualIdArray)
    {
        let retIndvs = [];

        for(let idx in individualIdArray)
        {
            let idv = this.getIndvById(individualIdArray[idx]);

            if(idv)
            {
                retIndvs.push(idv);
            }
        }

        return retIndvs;
    }

    getReconciledAttributes(consolidationMode, consolidationSortKeys)
    {
        let tmpData = deepClone(this.individuals);
        dataSortObjArrayByKeys(tmpData, consolidationSortKeys);

        let excludedProperties = [ 'ContactPointEmail', 'ConsentCollapsed' ];

        let masterObj = getCompleteProperties(tmpData, excludedProperties);
        let retObj = { 
            colorMap: {}, 
            isUnifiedIndv: true,
        };

        // loop through each property
        for(let masterKey in masterObj)
        {
            retObj[masterKey] = null;

            if(consolidationMode == 'Consolidate')
            {
                // find the first available value
                for(let idx in tmpData)
                {
                    var curRow = tmpData[idx];
                    var curVal = curRow[masterKey];
                    var curColor = curRow.color;

                    if(curVal != undefined && curVal !=null)
                    {
                        retObj[masterKey] = curVal;
                        retObj.colorMap[masterKey] = curColor;
                        break;
                    }
                }
            }
            else if(consolidationMode == 'PickAWinner'){
                retObj[masterKey] = tmpData[0][masterKey];
            }
        }

        return retObj;
    }

    generateClusteredContactPoints(){
        let tmpCPEmailFull = [];
        let retCPEmailClustered = [];

        // collect all contact points
        for(let idxIndv in this.individuals)
        {
            let curIndv = this.individuals[idxIndv];

            for(let idxCP in curIndv.ContactPointEmail)
            {
                let curCP = curIndv.ContactPointEmail[idxCP];
                curCP.id = curIndv.id;
                curCP.color = curIndv.color;

                tmpCPEmailFull.push(curCP);
            }
        }

        let emailClusters = dataShardObjectArrayByKey(tmpCPEmailFull, 'EmailAddress');

        for(let idxEmailClst in emailClusters)
        {
            let curEmailCluster = emailClusters[idxEmailClst];
            let newEmailClst = new UnifiedContactPoint(curEmailCluster);

            retCPEmailClustered.push(newEmailClst);
        }

        return retCPEmailClustered;
    }

    getDenormalizedContactPointEmails()
    {
        var tmpRet = [];

        for(let indvIdx in this.individuals)
        {
            let curIdv = this.individuals[indvIdx];

            if(curIdv.ContactPointEmail === undefined)
            {
                tmpRet.push(
                    {
                        color: curIdv.color,
                        id: curIdv.id,
                        UID: this.UID,
                        _object_type: curIdv._object_type,
                        _created_date: curIdv._created_date,
                        ContactPointEmailId: null,
                        EmailAddress: null,
                        Attributes: [],
                        EmailContactPointConsent: null
                    });
            }
            else
            {
                for(let cpIdx in curIdv.ContactPointEmail)
                {
                    let curCP = curIdv.ContactPointEmail[cpIdx];

                    tmpRet.push(
                    {
                        color: curIdv.color,
                        id: curIdv.id,
                        UID: this.UID,
                        _object_type: curIdv._object_type,
                        _created_date: curIdv._created_date,
                        ContactPointEmailId: curCP.ContactPointEmailId,
                        EmailAddress: curCP.EmailAddress,
                        Attributes: [],
                    });
                }
            }
        }

        return tmpRet;
    }

    getCollapsedConsent()
    {
        let ret = [];

        for(let i = 0; i < this.individuals.length; i++)
        {
            let curIndv = this.individuals[i];

            // L1 - Party Consent
            if(curIndv.PartyConsent !== undefined)
            {
                for(let ii = 0; ii < curIndv.PartyConsent.length; ii++)
                {
                    let curPartyConsent = curIndv.PartyConsent[ii];

                    ret.push({
                        Level: 'L1',
                        IndividualId: curIndv.id,
                        ContactPoint: null,
                        ConsentStatus: curPartyConsent.consent_status,
                        EngagementChannelType: null,
                        DataUsePurpose: null,
                        Brand: null
                    });
                }
            }

            // L2 - Engagement Channel Consent
            if(curIndv.EngagementChannelTypeConsent !== undefined)
            {
                for(let ii = 0; ii < curIndv.EngagementChannelTypeConsent.length; ii++)
                {
                    let curChannelConsent = curIndv.EngagementChannelTypeConsent[ii];

                    ret.push({
                        Level: 'L2',
                        IndividualId: curIndv.id,
                        ContactPoint: null,
                        ConsentStatus: curChannelConsent.consent_status,
                        EngagementChannelType: curChannelConsent.channel,
                        DataUsePurpose: curChannelConsent.DataUsePurpose ?? null,
                        Brand: null
                    });
                }
            }

            // L3 - Contact Point Consent
            if(curIndv.ContactPointEmail !== undefined)
            {
                for(let ii = 0; ii < curIndv.ContactPointEmail.length; ii++)
                {
                    let curContactPoint = curIndv.ContactPointEmail[ii];

                    for(let iii = 0; iii < curContactPoint.Consent.length; iii++)
                    {
                        let curCPConsent = curContactPoint.Consent[iii];
        
                        ret.push({
                            Level: 'L3',
                            IndividualId: curIndv.id,
                            ContactPoint: curContactPoint.ContactPointEmailId,
                            ConsentStatus: curCPConsent.consent_status,
                            EngagementChannelType: null,
                            DataUsePurpose: curCPConsent.DataUsePurpose ?? null,
                            Brand: null
                        });
                    }
                }
            }

            // L4 - Communication Subscription Consent
        }

        dataSortObjArrayByKeys(ret, [{key: 'Level', direction: 'asc'},{key: 'ContactPoint', direction: 'asc'}]);

        return ret;
    }

    getContactPointEmailByIds(cpEmailIDArray)
    {
        let ret = [];

        for(let idx in cpEmailIDArray)
        {
            ret.push(this.getContactPointEmailById(cpEmailIDArray[idx]));
        }

        return ret;
    }

    getContactPointEmailById(cpEmailId)
    {
        for(let idvIdx in this.individuals)
        {
            let curIndividual = this.individuals[idvIdx];

            for(let cpEmailIdx in curIndividual.ContactPointEmail)
            {
                let curCPEmail = curIndividual.ContactPointEmail[cpEmailIdx];

                if(curCPEmail.ContactPointEmailId == cpEmailId)
                {
                    return curCPEmail;
                }
            }
        }
    }
}

class UnifiedContactPoint
{
    constructor (ucpDataArray)
    {
        let tmpEmail = ucpDataArray[0].EmailAddress;
        let tmpId = ucpDataArray[0].ContactPointEmailId;

        this.ContactPointEmailId = hashString(tmpEmail);
        this.EmailAddress = tmpEmail;
        this.ContactPoints = ucpDataArray;

        this.UnifiedContactPointEmailId = tmpId;
    }

    getIndividualIds()
    {
        return dataGetDistinctListForProperty(this.ContactPoints, 'id');
    }

    containsId(cpEmailId)
    {
        let doesContain = false;

        this.ContactPoints.forEach(cp => {
            if(cp.ContactPointEmailId == cpEmailId)
            {
                doesContain = true;
            }
        })

        return doesContain;
    }
}

class Individual
{
    constructor(sourceObj)
    {
        this._created_date = '2022-01-01';

        // transfer all the properties
        for(let propIdx in sourceObj)
        {
            this[propIdx] = sourceObj[propIdx];
        }

        if(this.ContactPointEmail === undefined)
        {
            let defaultEmailCP = new ContactPointEmail('Email-' + this.id, this.Email, null, this.createdDate);
            defaultEmailCP.EmailAddress = this.Email;

            this.ContactPointEmail = [];
            this.ContactPointEmail.push(defaultEmailCP);
        }
    }
}

class ContactPointEmail
{
    constructor(emailId, emailAddress, dataSource, createdDate)
    {
        let defaultSource = 'Default';
        let defaultCD = '2022-01-01';

        this.ContactPointEmailId = emailId ?? hashString(emailAddress);
        this.emailAddress = emailAddress;
        this.DataSource = dataSource ?? defaultSource;
        this.createdDate = createdDate ?? defaultCD;
        this.Consent = [];
    }
}

class ActivationEngine{
    constructor()
    {
        this.filterCPEmail = [
            {
                key: 'ConsentStatus',
                operator: '=',
                value: 'Opt In',
            },
            {
                key: 'Level',
                operator: '=',
                value: 'L3',
            }
        ];
        this.filterIndividuals = [
            {
                key: 'ConsentStatus',
                operator: '=',
                value: 'Opt In',
            }
        ];
        this.sortCPEmail = [
            { key:'DataSource', direction:'asc'},
            { key:'LastCaptureDate', direction:'dsc'}
        ]
    }

    generateActivatedData(clusterArray)
    {
        let ret = [];

        for(let idx in clusterArray)
        {
            let curCluster = clusterArray[idx];

            let collapsedConsent = curCluster.getCollapsedConsent();

            let filteredConsent = dataFilterObjectArray(collapsedConsent, this.filterCPEmail);
            let individualIds = dataGetDistinctListForProperty(filteredConsent, 'IndividualId');
            let cpIDs = dataGetDistinctListForProperty(filteredConsent, 'ContactPoint');
            let cpEmails = curCluster.getContactPointEmailByIds(cpIDs);
            let individuals = curCluster.getIndvsById(individualIds);

            dataSortObjArrayByKeys(cpEmails, this.sortCPEmail);

            ret = ret.concat(individuals);
        }

        return ret;
    }
}