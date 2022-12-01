class Cluster
{
    constructor(indvArray, irMatchKey, uidMode)
    {
        this.uidMode = uidMode;
        this.matchValue = indvArray[0][irMatchKey];
        this.clusterId = hashString(indvArray[0][irMatchKey]);
        this.individuals = indvArray;
        this.UnifiedContactPointEmail = [];
        this.delta = 'unchanged';

        this.generateClusteredContactPoints();
    }

    getUnifiedIndividual(uidMode, consolidationMode, consolidationSortKeys)
    {
        let tmpReconciledIndv = this.getReconciledAttributes(consolidationMode, consolidationSortKeys);

        if(uidMode == 'Cluster')
        {
            tmpReconciledIndv.UID = clst.clusterId;
        }
        else if(uidMode == 'Member')
        {
            tmpReconciledIndv.UID = tmpReconciledIndv.id;
        }

        delete tmpReconciledIndv.id;

        return tmpReconciledIndv;
    }

    getUnifiedEmailClusterByCPEmailId(ContactPointEmailId)
    {
        for(let unCPIdx in this.UnifiedContactPointEmail)
        {
            let curUCP = this.UnifiedContactPointEmail[unCPIdx];

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

            this.UnifiedContactPointEmail.push(newEmailClst);
        }
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