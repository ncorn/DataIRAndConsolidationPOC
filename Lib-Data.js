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

function crteateDataFromScenarioRawData(data, irMatchKey, consolidationMode, consolidationSortKeys, uidMode){
    // get the raw data
    var stepRawData = deepClone(data);

    // get data sorted by match key
    var stepSortedData = deepClone(data);

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

    var consolidatedIndividuals = new Array();

    for(var idx in clusters)
    {
        var clst = clusters[idx];
        var curConsIndv = dataConsolidateAttributes(clst.individuals, consolidationMode, consolidationSortKeys);
        curConsIndv.clusterId = clst.clusterId;

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

        consolidatedIndividuals.push(curConsIndv);
    }

    var output = {
        dataRaw: stepRawData,
        dataMatchSorted: stepSortedData,
        dataClusters: clusters,
        dataConsolidatedIndv: consolidatedIndividuals
    };

    return output;
}

function dataConsolidateAttributes(arrayData, consolidationMode, consolidationSortKeys)
{
    var tmpData = deepClone(arrayData);
    dataSortObjArrayByKeys(tmpData, consolidationSortKeys);
    var masterObj = getCompleteProperties(tmpData);
    var retObj = { colorMap: {}, isUnifiedIndv: true };

    // loop through each property
    for(var masterKey in masterObj)
    {
        retObj[masterKey] = null;

        if(consolidationMode == 'Consolidate')
        {
            // find the first available value
            for(var idx in tmpData)
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

function getCompleteProperties(arrayData)
{
    var masterObj = {};
    data = arrayData;

    // collect all properties
    for(var i = 0; i < data.length; i++)
    {
        var curObj = data[i];

        for(var key in curObj)
        {
            if(masterObj[key] === undefined)
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
        dataConsolidatedIndv: deepClone(dataIterationOne.dataConsolidatedIndv)
    };

    output.dataRaw = output.dataRaw.concat(deepClone(dataIterationTwo.dataRaw));
    output.dataMatchSorted = output.dataMatchSorted.concat(deepClone(dataIterationTwo.dataMatchSorted));
    output.dataConsolidatedIndv = output.dataConsolidatedIndv.concat(deepClone(dataIterationTwo.dataConsolidatedIndv));

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