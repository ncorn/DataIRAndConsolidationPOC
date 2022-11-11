scenarios.push({
    id: "DataUnification-Mixing",
    title: 'Data Unification - Mixing - Shared Email - Family',
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
    id: "DataUnification-Duplicates",
    title: 'Data Unification - Duplicates',
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