function dataAssignScenarioDefaults(){
    for(var idx in scenarios)
    {
        var curScen = scenarios[idx];

        curScen.uidMode = curScen.uidMode ?? 'Member';
        curScen.consolidationSortKeys = curScen.consolidationSortKeys ?? defaultConsolidationSortKeys;
    }
}

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}

function dataCalculateArrayDeltas(objGroupA, objGroupB, compareKey)
{
    var sortConfig = [{ key: compareKey, direction: 'asc'}]

    dataSortObjArrayByKeys(objGroupA, sortConfig);
    dataSortObjArrayByKeys(objGroupB, sortConfig);

    var idxB = 0;
    var isFirstB = true;

    for(var idxA in objGroupA)
    {
        var objA = objGroupA[idxA];
        var curValA = objA[compareKey];

        var objMatched = false;

        if(idxB < objGroupB.length)
        {
            var objB = objGroupB[idxB];
            var curValB = objB[compareKey];

            while(idxB < objGroupB.length && curValA >= curValB)
            {
                if(curValA == curValB)
                {
                    var updates = dataCalculateObjectDeltas(objA, objB);

                    if(updates.length > 0)
                    {
                        objA.delta = 'updated';
                        objB.delta = 'updated';
                    }
                    else
                    {
                        objA.delta = 'unchanged';
                        objB.delta = 'unchanged';
                    }

                    objA.updates = deepClone(updates);
                    objB.updates = deepClone(updates);

                    objMatched = true;
                }
                else{
                    objB.delta = 'added';
                }

                idxB++;

                if(idxB < objGroupB.length)
                {
                    objB = objGroupB[idxB];
                    curValB = objB[compareKey];
                }
            }
        }
        
        if(!objMatched)
        {
            objA.delta = 'removed';
        }
    }

    while(idxB < objGroupB.length)
    {
        var curObjB = objGroupB[idxB];

        curObjB.delta = 'added';

        idxB++;
    }
}

function dataCalculateObjectDeltas(objA, objB)
{
    var excludedKeys = [ 'color', 'colorMap' ];
    var deltas = [];
    var objAKeys = Object.keys(objA);
    var objBKeys = Object.keys(objB);
    var objSumKeys = objAKeys.concat(objBKeys);

    objSumKeys.sort();

    for(var i = 0; i < objSumKeys.length; i++)
    {
        var isExcluded = false;
        var prevValue;
        var curKey = objSumKeys[i];
        var nextKey = objSumKeys[i+1];

        excludedKeys.forEach(element => {
            if(element == curKey)
            {
                isExcluded = true;
            }
        });

        if(isExcluded)
        {
            continue;
        }

        while(curKey === nextKey)
        {
            i++;
            curKey = nextKey;
            nextKey = objSumKeys[i+1];
        }

        var valA = objA[curKey];
        var valB = objB[curKey];

        if(Array.isArray(valA) || Array.isArray(valB))
        {
            continue;
        }

        if(valA !== valB)
        {
            var delta = {
                key: curKey,
                valLeft: valA,
                valRight: valB,
            }

            deltas.push(delta);
        }
    }

    return deltas;
}

function hashString(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

function crteateDataFromScenarioRawData(data, irMatchKey, consolidationMode, consolidationSortKeys, uidMode, flowSortKeys){
    // get the raw data
    var stepRawData = deepClone(data);

    // get data sorted by match key
    var stepSortedData = deepClone(data);

    // Normalize all the consent values
    dataCollapseConsent(stepSortedData);

    stepSortedData.sort(function(a,b){
        var valA = a[irMatchKey];
        var valB = b[irMatchKey];

        if(valA>valB)
        {
            return 1;
        }

        if(valA<valB)
        {
            return -1;
        }

            return 0;
    });

    // cluster the data (IR)
    // break data apart by match key
    var clusters = [];
    var isFirst = true;
    var prevValue;
    var curCluster = {
        matchValue: null,
        clusterId: null,
        individuals: new Array()
    };
    
    clusters.push(curCluster);

    for(var idx in stepSortedData)
    {
        if(isFirst)
        {
            prevValue = stepSortedData[idx][irMatchKey];
            isFirst = false;
        }

        var curRow = deepClone(stepSortedData[idx]);
        var curValue = curRow[irMatchKey];
        var curClusterId = hashString(curValue);

        if(curValue !== prevValue)
        {
            curCluster = {
                matchValue: null,
                clusterId: null,
                individuals: new Array()
            };
            clusters.push(curCluster);
        }

        curCluster.matchValue = curValue;
        curCluster.clusterId = curClusterId;
        curCluster.individuals.push(curRow);

        var prevValue = curValue;
    }

    // Cluster Contact Points
    for(let idx in clusters)
    {
        let tmpCPEmailFull = [];
        let curCluster = clusters[idx];

        // collect all contact points
        for(let idxIndv in curCluster.individuals)
        {
            let curIndv = curCluster.individuals[idxIndv];

            for(let idxCP in curIndv.ContactPointEmail)
            {
                let curCP = curIndv.ContactPointEmail[idxCP];
                let tmpCP = deepClone(curCP);
                tmpCP.id = curIndv.id;
                tmpCP.color = curIndv.color;

                tmpCPEmailFull.push(tmpCP);
            }
        }

        let emailClusters = dataShardObjectArrayByKey(tmpCPEmailFull, 'EmailAddress');
        curCluster.UnifiedContactPointEmail = [];

        for(let idxEmailClst in emailClusters)
        {
            let curEmailCluster = emailClusters[idxEmailClst];

            // TODO: There is no e-mail contact point ranking
            let clusterEmail = curEmailCluster[0].EmailAddress;
            let clusterCPID = curEmailCluster[0].ContactPointEmailId;

            let newEmailClst = {
                UnifiedContactPointEmailId: hashString(clusterEmail),
                ContactPointEmailId: clusterCPID,
                EmailAddress: clusterEmail,
                ContactPoints: curEmailCluster,
            };

            curCluster.UnifiedContactPointEmail.push(newEmailClst);
        }
    }

    // Consolidate individuals in each cluster
    var consolidatedIndividuals = new Array();
    let flowData = [];

    for(let idx in clusters)
    {
        let tmpFlowData = [];
        let clst = clusters[idx];
        let curConsIndv = dataConsolidateAttributes(clst.individuals, consolidationMode, consolidationSortKeys);
        curConsIndv.clusterId = clst.clusterId;
        curConsIndv.IndividualId = curConsIndv.id;

        clst.topRankId = curConsIndv.id;

        if(uidMode == 'Cluster')
        {
            clst.UID = clst.clusterId;
            curConsIndv.UID = clst.clusterId;
        }
        else if(uidMode == 'Member')
        {
            clst.UID = curConsIndv.id;
            curConsIndv.UID = curConsIndv.id;
        }

        delete curConsIndv.id;

        //let tmpUnfiedContactPointEmail = dataGetDistinctListForProperty(clst.UnifiedContactPointEmail, 'UnifiedContactPointEmailId');
        //curConsIndv.UnifiedContactPointEmail = tmpUnfiedContactPointEmail;

        consolidatedIndividuals.push(curConsIndv);

        // Create a view for Flow
        // denormalize all individuals
        for(let indvIdx in clst.individuals)
        {
            let curIdv = clst.individuals[indvIdx];

            if(curIdv.ContactPointEmail === undefined)
            {
                tmpFlowData.push(
                    {
                        color: curIdv.color,
                        id: curIdv.id,
                        _object_type: curIdv._object_type,
                        _created_date: curIdv._created_date,
                        ContactPointEmailId: null,
                        EmailAddress: null,
                        UID: curConsIndv.UID,
                        Attributes: [],
                        EmailContactPointConsent: null
                    });
            }
            else
            {
                for(let cpIdx in curIdv.ContactPointEmail)
                {
                    let curCP = curIdv.ContactPointEmail[cpIdx];

                    tmpFlowData.push(
                    {
                        color: curIdv.color,
                        id: curIdv.id,
                        _object_type: curIdv._object_type,
                        _created_date: curIdv._created_date,
                        ContactPointEmailId: curCP.ContactPointEmailId,
                        EmailAddress: curCP.EmailAddress,
                        UID: curConsIndv.UID,
                        Attributes: [],
                        //EmailContactPointConsent: deepClone(curCP.Consent)
                    });
                }
            }
        }

        if(tmpFlowData.length > 0)
        {
            // Sort: Type -> Created Date (oldest) -> Email ID
            dataSortObjArrayByKeys(tmpFlowData, flowSortKeys);
            let selectedFlowObject = tmpFlowData[0];

            // Add the consoidated attributes
            let objKeys = Object.keys(curConsIndv);

            let systemKeys = new Set();
            systemKeys.add('colorMap');
            systemKeys.add('isUnifiedIndv');
            systemKeys.add('color');
            systemKeys.add('_object_type');
            systemKeys.add('_created_date');
            systemKeys.add('_last_updated');
            systemKeys.add('PartyConsent');
            systemKeys.add('EngagementChannelTypeConsent');
            systemKeys.add('clusterId');
            systemKeys.add('IndividualId');
            systemKeys.add('UID');
            systemKeys.add('Email');

            for(let keyIdx in objKeys)
            {
                let key = objKeys[keyIdx];

                if(!systemKeys.has(key))
                {
                    selectedFlowObject.Attributes.push(
                        {
                            color: curConsIndv.colorMap[key],
                            key: key,
                            value: curConsIndv[key]
                        }
                    );
                }
            }

            // add The individual with the KVPs for unified individual
            flowData.push(selectedFlowObject);

            dataGetConsentFromCluster(curCluster, selectedFlowObject.ContactPointEmailId);
        }
    }

    var output = {
        dataRaw: stepRawData,
        dataMatchSorted: stepSortedData,
        dataClusters: clusters,
        dataConsolidatedIndv: consolidatedIndividuals,
        dataFlow: flowData
    };

    return output;
}

function dataGetConsentFromCluster(objCluster, ContactPointEmailId)
{

    // find the unified contact point
    //for(let clstIdx in objCluster)
    //{
        let curCluster = objCluster;
        let ucpIndivIds = [];
        let isMatched = false;

        for(let unCPIdx in curCluster.UnifiedContactPointEmail)
        {
            let curUCP = curCluster.UnifiedContactPointEmail[unCPIdx];

            for(let cpIdx in curUCP.ContactPoints)
            {
                let curEmailCP = curUCP.ContactPoints[cpIdx];

                if(curEmailCP.ContactPointEmailId == ContactPointEmailId)
                {
                    isMatched = true;
                    ucpIndivIds = dataGetDistinctListForProperty(curUCP.ContactPoints, 'id');
                    break;
                }
            }
        }

        // get all individuals from the unified CP
        let ucpIndvs = [];

        for(let ucpiIdx in ucpIndivIds)
        {
            let curIndvId = ucpIndivIds[ucpiIdx];

            for(indvIdx in curCluster.individuals)
            {
                let curIndv = curCluster.individuals[indvIdx];

                if(curIndv.id == curIndvId)
                {
                    ucpIndvs.push(curIndv);
                }
            }
        }

        // Get the last updated one
        dataSortObjArrayByKeys(ucpIndvs, [ { key: '_last_updated', direction: 'desc' } ]);
        //let mostRecentIndv = ucpIndvs[0];
    //}

    // Return its consent (if any)
    //return ucpIndivIds[0]..
}

function dataGetDistinctListForProperty(objArray, key)
{
    let retData = new Set();

    for(let idx in objArray)
    {
        retData.add(objArray[idx][key]);
    }

    return Array.from(retData);
}

function dataShardObjectArrayByKey(objArray, key)
{
    if(objArray.length == 0)
    {
        return [];
    }

    dataSortObjArrayByKeys(objArray, [ { key: key, direction: 'asc' } ]);

    // Divide contact points into cp clusters
    let isFirst = true;
    let prevObj = null;
    let outShards = [];
    let tmpShard = [];
    outShards.push(tmpShard);

    for(let idx in objArray)
    {
        if(isFirst)
        {
            isFirst = false;
            prevObj = objArray[0];
        }

        let curObj = objArray[idx];

        if(prevObj[key] != curObj[key])
        {
            tmpShard = [];
            outShards.push(tmpShard);
        }

        tmpShard.push(curObj);

        prevObj = curObj;
    }

    return outShards;
}

function dataCollapseConsent(individuals)
{
    for(let i = 0; i < individuals.length; i++)
    {
        let curIndv = individuals[i];
        curIndv.ConsentCollapsed = [];

        // L1 - Party Consent
        if(curIndv.PartyConsent !== undefined)
        {
            for(let ii = 0; ii < curIndv.PartyConsent.length; ii++)
            {
                let curPartyConsent = curIndv.PartyConsent[ii];

                curIndv.ConsentCollapsed.push({
                    Level: 'L1',
                    ConsentStatus: curPartyConsent.consent_status,
                    EngagementChannelType: null,
                    ContactPoint: null,
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

                curIndv.ConsentCollapsed.push({
                    Level: 'L2',
                    ConsentStatus: curChannelConsent.consent_status,
                    EngagementChannelType: curChannelConsent.channel,
                    ContactPoint: null,
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
    
                    curIndv.ConsentCollapsed.push({
                        Level: 'L3',
                        ConsentStatus: curCPConsent.consent_status,
                        EngagementChannelType: null,
                        ContactPoint: curContactPoint.ContactPointEmailId,
                        DataUsePurpose: curCPConsent.DataUsePurpose ?? null,
                        Brand: null
                    });
                }
            }

        }

        // L4 - Communication Subscription Consent
    }
}

function dataConsolidateAttributes(arrayData, consolidationMode, consolidationSortKeys)
{
    let tmpData = deepClone(arrayData);
    dataSortObjArrayByKeys(tmpData, consolidationSortKeys);
    let masterObj = getCompleteProperties(tmpData, [ 'ContactPointEmail', 'ConsentCollapsed' ]);
    let retObj = { colorMap: {}, isUnifiedIndv: true };

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

function dataSortObjArrayByKeys(objArray, sortKeys)
{
    objArray.sort(function(a, b)
    {
        var retSort = 0;

        for(var idx in sortKeys)
        {
            var sortKey = sortKeys[idx].key;
            var sortDir = sortKeys[idx].direction;

            var curSortValA = a[sortKey];
            var curSortValB = b[sortKey];

            if(curSortValA < curSortValB)
            {
                retSort = -1;

                if(sortDir == 'desc')
                {
                    retSort = retSort * -1;
                }

                break;
            }

            if(curSortValA > curSortValB)
            {
                retSort = 1;

                if(sortDir == 'desc')
                {
                    retSort = retSort * -1;
                }

                break;
            }
        }

        return retSort;
    });
}   

function getCompleteProperties(arrayData, excludedKeys)
{
    let masterObj = {};
    data = arrayData;

    // collect all properties
    for(let i = 0; i < data.length; i++)
    {
        let curObj = data[i];

        for(let key in curObj)
        {
            let isExcluded = false;

            if(excludedKeys)
            {
                for(let excldIdx in excludedKeys)
                {
                    if(key === excludedKeys[excldIdx])
                    {
                        isExcluded = true;
                    }
                }
            }

            if(masterObj[key] === undefined && isExcluded == false)
            {
                masterObj[key] = null;
            }
        }
    }

    return masterObj;
}

function dataCombineDataIterations(dataIterationOne, dataIterationTwo, idKeyRawData, idKeyClusterData, idKeyConsolidatedIndividuals, uidMode)
{
    var output = {
        dataRaw: deepClone(dataIterationOne.dataRaw),
        dataMatchSorted: deepClone(dataIterationOne.dataMatchSorted),
        dataClusters: deepClone(dataIterationOne.dataClusters),
        dataConsolidatedIndv: deepClone(dataIterationOne.dataConsolidatedIndv),
        dataFlow: deepClone(dataIterationOne.dataFlow)
    };

    output.dataRaw = output.dataRaw.concat(deepClone(dataIterationTwo.dataRaw));
    output.dataMatchSorted = output.dataMatchSorted.concat(deepClone(dataIterationTwo.dataMatchSorted));
    output.dataConsolidatedIndv = output.dataConsolidatedIndv.concat(deepClone(dataIterationTwo.dataConsolidatedIndv));
    output.dataFlow = output.dataFlow.concat(deepClone(dataIterationTwo.dataFlow));

    output.dataClusters = output.dataClusters.concat(deepClone(dataIterationTwo.dataClusters));

    var tmpClusters = deepClone(dataIterationOne.dataClusters);
    tmpClusters = tmpClusters.concat(deepClone(dataIterationTwo.dataClusters));

    dataSortObjArrayByKeys(tmpClusters, [{key: idKeyClusterData, direction: 'asc'}]);

    // combine any duplicate clusters
    var tmpCombinedClusters = new Array();
    var idx = 0;
    var nextClusterIdx = idx + 1;

    while(idx < tmpClusters.length)
    {
        var curCluster = tmpClusters[idx];
        var nextCluster = tmpClusters[nextClusterIdx];
        var tmpClusterACopy = deepClone(curCluster);
        tmpCombinedClusters.push(tmpClusterACopy);

        if(nextCluster === undefined)
        {
            
        }
        else if(curCluster[idKeyClusterData] == nextCluster[idKeyClusterData])
        {
            while(nextCluster !== undefined && curCluster[idKeyClusterData] == nextCluster[idKeyClusterData])
            {
                var tmpClusterBCopy = deepClone(nextCluster);

                tmpClusterACopy.individuals = tmpClusterACopy.individuals.concat(tmpClusterBCopy.individuals);

                nextClusterIdx++;
                nextCluster = tmpClusters[nextClusterIdx];
            }
        }
        else if(curCluster[idKeyClusterData] != nextCluster[idKeyClusterData])
        {

        }

        dataDeduplicateObjectArray(tmpClusterACopy.individuals, idKeyRawData);

        idx = nextClusterIdx;
        nextClusterIdx = idx + 1;
    }

    output.dataClusters = tmpCombinedClusters;

    dataDeduplicateObjectArray(output.dataRaw, idKeyRawData);
    //dataDeduplicateObjectArray(output.dataClusters, idKeyClusterData);
    dataDeduplicateObjectArray(output.dataConsolidatedIndv, idKeyConsolidatedIndividuals);

    return output;
}

function dataDeduplicateObjectArray(data, dedupKey)
{
    for(var idx in data)
    {
        var rowA = data[idx];
        var valA = rowA[dedupKey];

        for(var idxInner = Number.parseInt(idx) + 1; idxInner < data.length; idxInner++)
        {
            var rowB = data[idxInner];
            var valB = rowB[dedupKey];

            while(valA == valB && idxInner < data.length)
            {
                data.splice(idxInner, 1);

                if(idxInner < data.length)
                {
                    rowB = data[idxInner];
                    valB = rowB[dedupKey];
                }
            }
        }
    }
}