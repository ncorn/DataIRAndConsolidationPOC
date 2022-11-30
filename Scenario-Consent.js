scenarios.push({
    id:"Consent",
    title: 'Consent',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
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
                            DataUsePurpose: 'Marketing'
                        },
                        {
                            channel: 'email',
                            consent_status: 'Opt In',
                            DataUsePurpose: 'Account Updates'
                        }
                    ],
                    ContactPointEmail:[
                        {
                            ContactPointEmailId: 'Email1',
                            EmailAddress: 'home@domain.com',
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In',
                                    DataUsePurpose: 'Account Updates'
                                },
                                {
                                    consent_status: 'Opt Out',
                                    DataUsePurpose: 'Marketing'
                                }
                            ]
                        },
                        {
                            ContactPointEmailId: 'Email2',
                            EmailAddress: 'work@domain.com',
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In'
                                }
                            ]
                        },
                        {
                            ContactPointEmailId: 'Email3',
                            EmailAddress: 'throwaway@domain.com',
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In'
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
                            EmailAddress: 'home@domain.com',
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In'
                                }
                            ]
                        },
                        {
                            ContactPointEmailId: 'Email5',
                            EmailAddress: 'work@domain.com',
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In'
                                }
                            ]
                        },
                        {
                            ContactPointEmailId: 'Email6',
                            EmailAddress: 'throwaway@domain.com',
                            DataSource: 'Source1',
                            DataSourceObject: 'SourceObj1',
                            CreatedDate: '2022-01-02',
                            Consent: [
                                {
                                    consent_status: 'Opt In'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});