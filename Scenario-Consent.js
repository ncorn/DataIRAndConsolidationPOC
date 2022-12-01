scenarios.push({
    id:"Consent",
    title: 'Consent',
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
                    _created_date: '2022-06-01',
                    _last_updated: '2022-10-02',  
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
                            ContactPointEmailId: 'Email1',
                            EmailAddress: 'Smiths@TheSmiths.com',
                            DataSource: 'Marketing Cloud',
                            DataSourceObject: 'SourceObj1',
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
                    _created_date: '2021-06-01',
                    _last_updated: '2022-10-02',  
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
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
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