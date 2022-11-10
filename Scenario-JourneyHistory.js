var journeyHistorySendWaitSend = [
    {historyId: 1, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 2, timestamp: '2022-01-01', Activity: 'Wait: 7 Days'},
    {historyId: 3, timestamp: '2022-01-02', Activity: 'Send Email'}
];

var journeyHistoryStepSend5Emails = [
    {historyId: 4, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 5, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 6, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 7, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 8, timestamp: '2022-01-01', Activity: 'Send Email'},
];

scenarios.push({
    id: 'JourneyHistory-Rekey',
    title: 'Journey History - Rekey',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    consolidationSortKeys: 
    [  
        { key: 'object_type', direction: 'asc'}, 
        { key: 'created_date', direction: 'desc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-01', JourneyHistory: journeyHistorySendWaitSend },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-01', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 1',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-05', JourneyHistory: journeyHistorySendWaitSend },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-01', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 2',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-05', JourneyHistory: journeyHistorySendWaitSend },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-06' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-01', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 3',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-05', JourneyHistory: journeyHistorySendWaitSend },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-06' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-07' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-01', last_updated: '2022-10-04' },
            ]
        }
    ]
});


scenarios.push({
    id: 'JourneyHistory-Hop',
    title: 'Journey History - Hop - Mask & Reset Journey History',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    consolidationSortKeys: 
    [  
        { key: 'object_type', direction: 'asc'}, 
        { key: 'created_date', direction: 'desc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-01', JourneyHistory: journeyHistoryStepSend5Emails },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-03', JourneyHistory: journeyHistorySendWaitSend },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-01', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Lead Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-01', JourneyHistory: journeyHistoryStepSend5Emails },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-03', JourneyHistory: journeyHistorySendWaitSend },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', created_date: '2022-01-01', last_updated: '2022-10-04' },
            ]
        }
    ]
});

scenarios.push({
    id: 'JourneyHistory-Takeover',
    title: 'Journey History - Takeover',
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    consolidationSortKeys: 
    [  
        { key: 'object_type', direction: 'asc'}, 
        { key: 'created_date', direction: 'desc'} 
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-01', JourneyHistory: journeyHistoryStepSend5Emails },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Lead Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-04', last_updated: '2022-10-01', JourneyHistory: journeyHistoryStepSend5Emails },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-03', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', created_date: '2022-01-02', last_updated: '2022-10-03', JourneyHistory: [] },
            ]
        }
    ]
});