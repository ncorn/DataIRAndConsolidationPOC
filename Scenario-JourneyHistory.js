var _journey_historySendWaitSend = [
    {historyId: 1, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 2, timestamp: '2022-01-01', Activity: 'Wait: 7 Days'},
    {historyId: 3, timestamp: '2022-01-02', Activity: 'Send Email'}
];

var _journey_historyStepSend5Emails = [
    {historyId: 4, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 5, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 6, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 7, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 8, timestamp: '2022-01-01', Activity: 'Send Email'},
];

scenarios.push({
    id: '_journey_history-Rekey',
    title: 'Journey History - Rekey',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    consolidationSortKeys: 
    [  
        { key: '_object_type', direction: 'asc'}, 
        { key: '_created_date', direction: 'desc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01', _journey_history: _journey_historySendWaitSend },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 1',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-05', _journey_history: _journey_historySendWaitSend },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 2',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-05', _journey_history: _journey_historySendWaitSend },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 3',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-05', _journey_history: _journey_historySendWaitSend },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-07' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        }
    ]
});


scenarios.push({
    id: '_journey_history-Hop',
    title: 'Journey History - Hop - Mask & Reset Journey History',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    consolidationSortKeys: 
    [  
        { key: '_object_type', direction: 'asc'}, 
        { key: '_created_date', direction: 'asc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01', _journey_history: _journey_historyStepSend5Emails },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03', _journey_history: _journey_historySendWaitSend },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Lead Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01', _journey_history: _journey_historyStepSend5Emails },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03', _journey_history: _journey_historySendWaitSend },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        }
    ]
});

scenarios.push({
    id: '_journey_history-Takeover',
    title: 'Journey History - Takeover',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    uidMode: 'Member',
    consolidationSortKeys: 
    [  
        { key: '_object_type', direction: 'asc'}, 
        { key: '_created_date', direction: 'asc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01', _journey_history: _journey_historyStepSend5Emails },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Lead Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01', _journey_history: _journey_historyStepSend5Emails },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03', _journey_history: [] },
            ]
        }
    ]
});

scenarios.push({
    id: '_journey_history-Succession',
    title: 'Journey History - Succession',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    uidMode: 'Member',
    consolidationSortKeys: 
    [  
        { key: '_object_type', direction: 'asc'}, 
        { key: '_created_date', direction: 'asc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03', _journey_history: _journey_historyStepSend5Emails },
            ]
        },
        {
            title: 'Remove Contact',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02' },
            ]
        }
    ]
});