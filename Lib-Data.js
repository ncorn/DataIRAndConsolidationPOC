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
    let stepRawData = deepClone(data);
    let stepConvertedData = [];

    for(let indvIdx in data)
    {
        let curIndv = data[indvIdx];
        stepConvertedData.push(new Individual(curIndv));
    }

    /*=========================
    == Identity Resolution
    =========================*/

    // get data sorted by match key
    //var stepSortedData = deepClone(data);
    dataSortObjArrayByKeys(stepConvertedData, [{key: irMatchKey, direction:'asc'}]);

    // cluster the data (IR)
    // break data apart by match key
    let clusters = [];
    let tmpClusterIndividuals = dataShardObjectArrayByKey(stepConvertedData, irMatchKey);

    for(let idvClstIdx in tmpClusterIndividuals)
    {
        let curIndividuals = tmpClusterIndividuals[idvClstIdx];
        let newCluster = new Cluster(curIndividuals, irMatchKey, uidMode, consolidationMode, consolidationSortKeys);
        clusters.push(newCluster);
    }

    // Reconcile individuals in each cluster
    let unifiedAndReconciledIndividuals = new Array();
    let clusterOutputData = [];
    let flowData = [];

    clusters.forEach(cluster => {
        clusterOutputData.push(cluster.getComputedData());
    });


    /*=========================
    == Reconciliation
    =========================*/
    
    clusters.forEach(cluster => {
        unifiedAndReconciledIndividuals.push(cluster.getUnifiedIndividual());
    });
    

    /*=========================
    == Segmentation
    =========================*/
    let segmentData = [];
    let segmentCriteria = [];

    /*
    let segmentCriteria = [
        {
            key: '_created_date',
            operator: '>',
            value: '1984-07-30',
        }
    ];
    */
    
    //let segmentUnifiedIndividuals = dataFilterObjectArray(unifiedAndReconciledIndividuals, segmentCriteria);
    //segmentData.push(segmentUnifiedIndividuals);

    /*=========================
    == Flow
    =========================*/
    for(let idx in clusters)
    {
        let clst = clusters[idx];

        // Create a view for Flow
        // denormalize all individuals
        let tmpFlowData = clst.getDenormalizedContactPointEmails();

        if(tmpFlowData.length > 0)
        {
            let curConsIndv = clst.getUnifiedIndividual();
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

            if(selectedFlowObject.ContactPointEmailId)
            {
                let ucpEmailIndividuals = clst.getUnifiedCPEmailIndividualsByCPEmailID(selectedFlowObject.ContactPointEmailId);
                dataSortObjArrayByKeys(ucpEmailIndividuals, [{key:'_last_updated', direction:'desc'}]);

                let consentWinner = ucpEmailIndividuals[0];
                let winningConsent = deepClone(consentWinner.ContactPointEmail[0].Consent);

                winningConsent.forEach(val => val.color = consentWinner.color);

                selectedFlowObject.consent = winningConsent;
            }

            // add The individual with the KVPs for unified individual
            flowData.push(selectedFlowObject);
        }
    }

    /*=========================
    == Activation
    =========================*/

    //let activationEngine = new ActivationEngine();
    //let consentedEmailCP = activationEngine.generateActivatedData(dataObj.dataClusters);


    var output = {
        dataRaw: stepRawData,
        dataMatchSorted: stepConvertedData,
        dataClusters: clusterOutputData,
        dataConsolidatedIndv: unifiedAndReconciledIndividuals,
        dataFlow: flowData,
        dataSegments: segmentData
    };

    return output;
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

function dataCombineDataIterations(dataIterationOne, dataIterationTwo, idKeyRawData, idKeyClusterData, idKeyConsolidatedIndividuals, idKeyFlow)
{
    var output = {
        dataRaw: deepClone(dataIterationOne.dataRaw),
        dataMatchSorted: deepClone(dataIterationOne.dataMatchSorted),
        dataClusters: deepClone(dataIterationOne.dataClusters),
        dataConsolidatedIndv: deepClone(dataIterationOne.dataConsolidatedIndv),
        dataFlow: deepClone(dataIterationOne.dataFlow),
        dataSegments: deepClone(dataIterationOne.dataSegments),
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
    dataDeduplicateObjectArray(output.dataFlow, idKeyFlow);

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

function dataFilterObjectArray(objArray, filters)
{
    let ret = [];

    for(let idx in objArray)
    {
        let curObj = objArray[idx];
        let isIncluded = true;

        for(let filterIdx in filters)
        {
            let curFilter = filters[filterIdx];
            let curFilterData = curObj[curFilter.key];
            let curFilterValue = curFilter.value;

            switch(curFilter.operator)
            {
                case '=':
                    isIncluded = (curFilterData == curFilterValue);
                    break;
                case '<':
                    isIncluded = (curFilterData < curFilterValue);
                    break;
                case '>':
                    isIncluded = (curFilterData > curFilterValue);
                    break;
            }

            if(!isIncluded)
            {
                break;
            }
        }

        if(isIncluded)
        {
            ret.push(curObj);
        }
    }

    return ret;
}

/*
function dataGetDenormalizedObject(object, path)
{
    let ret = [];
    let propPath = path.split('.');
    let newPath = '';

    let curProp = propPath[0];
    let curObj = object[curProp];

    let curPropArray = [];

    if(Array.isArray(curObj))
    {
        for(let idx in curObj)
        {
            let curArrayObj = curObj[idx];

            if(propPath.length == 1)
            {
                curPropArray.push(curArrayObj);
            }
            else
            {
                curPropArray = dataGetDenormalizedObject(curObj, newPath);
            }
        }
    }
    else if(typeof object == 'object')
    {
        if(propPath.length == 1)
        {
            curPropArray.push(curObj);
        }
        else
        {
            curPropArray = dataGetDenormalizedObject(curObj, newPath);
        }
    }
    else
    {

    }

    for(let idx in curPropArray)
    {
        let nestedObj = curPropArray[idx];
        let mergedObj = dataMergeObjects(curObj, nestedObj);

        ret.push(mergedObj);
    }

    return ret;
}

function dataMergeObjects(obj1, obj2, excludedKeys)
{

}
*/