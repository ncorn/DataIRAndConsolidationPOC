scenarios.push({
    id:"Consent-1",
    title: 'Consent - Scenario 1',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
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
                { 
                    color: 'fffead', 
                    _object_type: 'Contact', 
                    id: 'C1', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com',
                    _created_date: '2018-06-01',
                    _last_updated: '2022-10-12',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt Out',
                            DataUsePurpose: 'Any'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email3',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt Out',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                },
                { 
                    color: 'ccffcf', 
                    _object_type: 'Contact', 
                    id: 'C2', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com', 
                    _created_date: '2019-07-01',
                    _last_updated: '2022-10-13',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt Out'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email2',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'S3',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                },
                { 
                    color: 'cccfff', 
                    _object_type: 'Contact', 
                    id: 'C3', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com', 
                    _created_date: '2020-08-01',
                    _last_updated: '2022-10-14',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt Out'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email1',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Commerce',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

scenarios.push({
    id:"Consent-2",
    title: 'Consent - Scenario 2',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
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
                { 
                    color: 'ffcccc', 
                    _object_type: 'Contact', 
                    id: 'C4', 
                    FirstName: 'Dawn',
                    LastName: 'R', 
                    Email: 'dawnr@domain.com', 
                    _created_date: '2021-09-01',
                    _last_updated: '2022-10-15',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt Out'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email4',
                            EmailAddress: 'dawnr@domain.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                },
                { 
                    color: 'c7feff', 
                    _object_type: 'Contact', 
                    id: 'C5', 
                    FirstName: 'Dawn',
                    LastName: 'R', 
                    Email: 'dawnr@domain.com', 
                    _created_date: '2021-09-01',
                    _last_updated: '2022-10-15',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt Out'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email4',
                            EmailAddress: 'dawnr@domain.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt Out',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

scenarios.push({
    id:"Consent-3",
    title: 'Consent - Scenario 3',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
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
                { 
                    color: 'fffead', 
                    _object_type: 'Contact', 
                    id: 'C1', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com',
                    _created_date: '2018-06-01',
                    _last_updated: '2022-10-12',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt In',
                            DataUsePurpose: 'Any'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email1',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt Out',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                },
                { 
                    color: 'ccffcf', 
                    _object_type: 'Contact', 
                    id: 'C2', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com', 
                    _created_date: '2019-07-01',
                    _last_updated: '2022-10-13',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt In',
                            DataUsePurpose: 'Any'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email4',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt Out',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

scenarios.push({
    id:"Consent-4",
    title: 'Consent - Scenario 4',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
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
                { 
                    color: 'fffead', 
                    _object_type: 'Contact', 
                    id: 'C1', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com',
                    _created_date: '2018-06-01',
                    _last_updated: '2022-10-12',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt In',
                            DataUsePurpose: 'Any'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email1',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt Out',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                },
                { 
                    color: 'ccffcf', 
                    _object_type: 'Contact', 
                    id: 'C2', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com', 
                    _created_date: '2019-07-01',
                    _last_updated: '2022-10-13',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt In',
                            DataUsePurpose: 'Any'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email4',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [ ]
                        }
                    ]
                }
            ]
        }
    ]
});

scenarios.push({
    id:"Consent-11",
    title: 'Consent - Scenario 11',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
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
                { 
                    color: 'fffead', 
                    _object_type: 'Contact', 
                    id: 'C1', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com',
                    _created_date: '2018-06-01',
                    _last_updated: '2022-10-12',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt In',
                            DataUsePurpose: 'Any'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email1',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                },
                { 
                    color: 'ccffcf', 
                    _object_type: 'Contact', 
                    id: 'C2', 
                    FirstName: 'Nathan',
                    LastName: 'Smith', 
                    Email: 'Smiths@TheSmiths.com', 
                    _created_date: '2019-07-01',
                    _last_updated: '2022-10-13',  
                    Suffix: 'Sr',
                    PartyConsent: [
                        {
                            channel: 'Solicit',
                            consent_status: 'Opt In' // 'Opt Out'
                        }
                    ],
                    EngagementChannelTypeConsent:[
                        {
                            channel: 'email', // 'sms', 'push'
                            consent_status: 'Opt Out'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email4',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In',
                                    DataUsePurpose: 'Any'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});