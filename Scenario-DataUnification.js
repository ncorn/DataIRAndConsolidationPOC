scenarios.push({
    id: "DataUnification-Mixing",
    title: 'Data Unification - Mixing - Shared Email - Family',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-01', relationship: 'Father', Salutation: 'Mr', Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-02', relationship: 'Son', Salutation: 'Mr', Suffix: 'Jr', },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Isaac', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-03', relationship: 'Son'},
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Avery', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-04', relationship: 'Daughter'},
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Mixing-SharedEmail-Team",
    title: 'Data Unification - Mixing - Shared Email - Team',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Dawn', LastName: 'R', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-02', Salutation: 'Mrs.' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Bill', LastName: 'E', MiddleName: 'Wayne', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-03', Suffix: 'Jr' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Betty', LastName: 'Smith', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-01', Pronouns: "They/Them" },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Mixing-UnverifiedEmail",
    title: 'Data Unification - Mixing - Unverified Email',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'DataEnthusiast1@Company.com', EmailVerified: false, _last_updated: '2022-10-02', BankAccountBalance: 3827596764 },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Dawn', LastName: 'R', Email: 'DataEnthusiast1@Company.com', EmailVerified: true, _last_updated: '2022-10-04', Salutation: 'Mrs.' },
            ]
        },
        {
            title: 'Correct Information',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'DataEnthusiast17@Company.com', EmailVerified: true, _last_updated: '2022-10-02', BankAccountBalance: 3827596764 },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Dawn', LastName: 'R', Email: 'DataEnthusiast1@Company.com', EmailVerified: true, _last_updated: '2022-10-04', Salutation: 'Mrs.' },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Mixing-UnverifiedEmail-Malicious",
    title: 'Data Unification - Mixing - Unverified Email - Malicious',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Dawn', LastName: 'R', Email: 'DataEnthusiast1@Company.com', EmailVerified: true, _last_updated: '2022-10-04', Salutation: 'Mrs.' },
            ]
        },
        {
            title: 'Correct Information',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'DataEnthusiast1@Company.com', EmailVerified: false, _last_updated: '2022-10-02', FavoriteWebsite: 'HateSpeech.Domain' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Dawn', LastName: 'R', Email: 'DataEnthusiast1@Company.com', EmailVerified: true, _last_updated: '2022-10-04', Salutation: 'Mrs.' },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-PickAWinner-SharedEmail-Team",
    title: 'Data Unification - Pick A Winner - Shared Email - Team',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'PickAWinner',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Dawn', LastName: 'R', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-02', Salutation: 'Mrs.' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Bill', LastName: 'E', MiddleName: 'Wayne', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-03', Suffix: 'Jr' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Betty', LastName: 'Smith', Email: 'FinanceTeam@Company.com', _last_updated: '2022-10-01', Pronouns: "They/Them" },
            ]
        }
    ]
});


scenarios.push({
    id: "DataUnification-Duplicates",
    title: 'Data Unification - Duplicates',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-01' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-01' },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Masking",
    title: 'Data Unification - Masking - Name Update',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Susan', LastName: 'Johnson', Email: 'Susan.Johnson@mailprovider.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L1', FirstName: 'Susan', LastName: 'Johnson', Email: 'Susan.Johnson@mailprovider.com', _last_updated: '2022-10-03' },
            ]
        },
        {
            title: 'Lead Update 1',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Susan', LastName: 'Johnson', Email: 'Susan.Johnson@mailprovider.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L1', FirstName: 'Susan', LastName: 'Smith', Email: 'Susan.Johnson@mailprovider.com', _last_updated: '2022-10-03' },
            ]
        },
        {
            title: 'Lead Update 2',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Susan', LastName: 'Johnson', Email: 'Susan.Johnson@mailprovider.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L1', FirstName: 'Suzie', LastName: 'Smith', Email: 'Susan.Johnson@mailprovider.com', _last_updated: '2022-10-03' },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Masking-DeadName",
    title: 'Data Unification - Masking - Dead Name',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', Salutation: 'Ms', Pronouns: 'She/Her', FirstName: 'Susan', LastName: 'Johnson', Email: 'contact@mailprovider.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L1', Salutation: 'Ms', Pronouns: 'She/Her', FirstName: 'Susan', LastName: 'Johnson', Email: 'contact@mailprovider.com', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Pronount Change',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', Salutation: 'Ms', Pronouns: 'She/Her', FirstName: 'Susan', LastName: 'Johnson', Email: 'contact@mailprovider.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L1', Salutation: 'Mr', Pronouns: 'He/Him', FirstName: 'Steve', LastName: 'Johnson', Email: 'contact@mailprovider.com', _last_updated: '2022-10-02' },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Masking-Numeric",
    title: 'Data Unification - Masking - Numeric Values',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'ffcccc', Account: 'BU3', _object_type: 'Contact', id: 'C1', FirstName: 'Susan', LastName: 'Johnson', Email: 'contact@mailprovider.com', LifetimePurchaseTotal: 0, _last_updated: '2022-10-03' },
                { color: 'cccfff', Account: 'BU2', _object_type: 'Contact', id: 'C2', FirstName: 'Susan', LastName: 'Johnson', Email: 'contact@mailprovider.com', LifetimePurchaseTotal: 1000, _last_updated: '2022-10-02' },
                { color: 'ccffcf', Account: 'BU1', _object_type: 'Contact', id: 'C3', FirstName: 'Susan', LastName: 'Johnson', Email: 'contact@mailprovider.com', LifetimePurchaseTotal: 100000, _last_updated: '2022-10-01' },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-NonOverlappingData",
    title: 'Data Unification - Non-Overlapping Data',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'c7feff', _object_type: 'Contact', id: 'C0', FirstName: 'Nathan', LastName: 'Smith', Email: 'NathanS@domain.com.com', _last_updated: '2022-10-05'},
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'NathanS@domain.com.com', _last_updated: '2022-10-01', Salutation: 'Mr' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'NathanS@domain.com.com', _last_updated: '2022-10-02', Suffix: 'Sr' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'NathanS@domain.com.com', _last_updated: '2022-10-03', Title: 'Software Architect' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'NathanS@domain.com.com', _last_updated: '2022-10-04', YearsOfService: 11 },
            ]
        }
    ]
});

scenarios.push({
    id: "DataUnification-Masking-Profiles",
    title: 'Data Unification - Masking - Shared Email - Kid\'s Profiles',
    Group: 'Reconciliation',
    GroupOrder: 1,
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', GamerProfileUsername: 'MultiplayerAddict', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-02', Age: 16, FavoriteGame: 'Call Of Duty' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Isaac', LastName: 'Smith', GamerProfileUsername: 'MathWhiz', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-03', Age: 5, FavoriteGame: 'Number Explorer' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Avery', LastName: 'Smith', GamerProfileUsername: 'EarlyLearner17', Email: 'SmithFamily@TheSmiths.com', _last_updated: '2022-10-04', Age: 2, FavoriteGame: 'Shape Monster' },
            ]
        }
    ]
});