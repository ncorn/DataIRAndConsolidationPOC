var _journey_historySendWaitSend = [
    {historyId: 1, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 2, timestamp: '2022-01-01', Activity: 'Wait: 7 Days'},
    {historyId: 3, timestamp: '2022-01-02', Activity: 'Send Email'}
];

var _engagement_history2Sends = [
    {historyId: 1, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 2, timestamp: '2022-01-02', Activity: 'Send Email'}
];

var _journey_historyStepSend5Emails = [
    {historyId: 4, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 5, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 6, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 7, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 8, timestamp: '2022-01-01', Activity: 'Send Email'},
];

var _engagement_history5Sends = [
    {historyId: 3, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 4, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 5, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 6, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 7, timestamp: '2022-01-01', Activity: 'Send Email'},
];

scenarios.push({
    id: '_journey_history-Rekey',
    title: 'Journey History - Rekey',
    Group: 'Journey History',
    GroupOrder: 40,
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    consolidationSortKeys: 
    [  
        { key: '_last_updated', direction: 'desc'} 
    ],
    sortKeysFlow: [  
        { key: '_object_type', direction: 'asc'}, 
        { key: '_created_date', direction: 'asc'},
        { key: 'ContactPointEmailId', direction: 'asc'}
    ],
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends,ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email4',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02',ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email3',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt Out',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt Out',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03',ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email2',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04',ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email1',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt Out',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt Out',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
            ]
        },
        {
            title: 'Rekey 1',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-05', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends,ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email4',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02',ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email3',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03',ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email2',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04',ContactPointEmail:[
                    {
                        ContactPointEmailId: 'Email1',
                        EmailAddress: 'business@nsmith.com',
                        DataSource: 'Marketing Cloud',
                        DataSourceObject: 'SourceObj1',
                        CreatedDate: '2022-01-02',
                        Consent: [
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Account Updates'
                            },
                            {
                                consent_status: 'Opt In',
                                DataUsePurpose: 'Marketing'
                            }
                        ]
                    }
                ] },
            ]
        },
        {
            title: 'Rekey 2',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-05', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 3',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-05', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-07' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04' },
            ]
        }
    ]
});


scenarios.push({
    id: '_journey_history-Hop-Unmask-BeMasked',
    title: 'Journey History - Hop - Unmask:Be Masked',
    Group: 'Journey History',
    GroupOrder: 40,
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
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-03', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Lead Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-03', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-04' },
            ]
        }
    ]
});

scenarios.push({
    id: '_journey_history-Hop-Unmask-Masked',
    title: 'Journey History - Hop - Unmask:Mask',
    Group: 'Journey History',
    GroupOrder: 40,
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
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
            ]
        },
        {
            title: 'Contact Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
            ]
        }
    ]
});

scenarios.push({
    id: '_journey_history-Hop-Subtract-Mask',
    title: 'Journey History - Hop - Subtract:Mask',
    Group: 'Journey History',
    GroupOrder: 40,
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
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
            ]
        },
        {
            title: 'Contact Cluster Hop',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _created_date: '2022-01-01', _last_updated: '2022-10-04', _journey_history: _journey_historySendWaitSend, _engagement_history: _engagement_history2Sends },
            ]
        }
    ]
});

scenarios.push({
    id: '_journey_history-Takeover',
    title: 'Journey History - Takeover',
    Group: 'Journey History',
    GroupOrder: 40,
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
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
            ]
        },
        {
            title: 'Add New Contact',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-04', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-03', _last_updated: '2022-10-02', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03', _journey_history: [], _engagement_history: [] },
            ]
        }
    ]
});

scenarios.push({
    id: '_journey_history-Succession',
    title: 'Journey History - Succession',
    Group: 'Journey History',
    GroupOrder: 40,
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
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _created_date: '2022-01-02', _last_updated: '2022-10-03', _journey_history: _journey_historyStepSend5Emails, _engagement_history: _engagement_history5Sends },
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