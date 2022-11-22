scenarios.push({
    id:"EndToEnd",
    title: 'End To End',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                // Data Mixing
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-02',  Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Euna', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-01', Salutation: 'Mrs.', Pronouns: 'She/Her', Title: "MD" },

                // Data Masking/Split
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L1', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'He/Him'},

                // Data Stability
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C4', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B1', YTDSpend: 0},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C5', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B2', YTDSpend: 100000},

                // Unmasking/Split
                { color: 'ff949d', _object_type: 'Contact', id: 'C6', FirstName: 'Elliot', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'c7feff', _object_type: 'Lead', id: 'L2', FirstName: 'Ellen', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'She/Her'},
            ]
        },
        {
            title: 'Attempted Gender Update',
            description: '',
            data:
            [
                // Data Mixing
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-02',  Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Euna', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-01', Salutation: 'Mrs.', Pronouns: 'She/Her', Title: "MD" },

                // Data Masking/Split
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L1', FirstName: 'Sarah', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-03',  Salutation: 'Ms', Pronouns: 'She/Her'},

                // Data Stability
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C4', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B1', YTDSpend: 0},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C5', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B2', YTDSpend: 100000},

                // Unmasking/Split
                { color: 'ff949d', _object_type: 'Contact', id: 'C6', FirstName: 'Elliot', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'c7feff', _object_type: 'Lead', id: 'L2', FirstName: 'Ellen', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'She/Her'},
            ]
        },
        {
            title: 'Attempted Gender Update - Split',
            description: '',
            data:
            [
                // Data Mixing
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-02',  Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Euna', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-01', Salutation: 'Mrs.', Pronouns: 'She/Her', Title: "MD" },

                // Data Masking/Split
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L1', FirstName: 'Sarah', LastName: 'Johnson', Email: 's.johnson@gmail.com', _last_updated: '2022-10-04',  Salutation: 'Ms', Pronouns: 'She/Her'},

                // Data Stability
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C4', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B1', YTDSpend: 0},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C5', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B2', YTDSpend: 100000},

                // Unmasking/Split
                { color: 'ff949d', _object_type: 'Contact', id: 'C6', FirstName: 'Elliot', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'c7feff', _object_type: 'Lead', id: 'L2', FirstName: 'Ellen', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'She/Her'},
            ]
        },
        {
            title: 'Inactive Spender Update',
            description: '',
            data:
            [
                // Data Mixing
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-02',  Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Euna', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-01', Salutation: 'Mrs.', Pronouns: 'She/Her', Title: "MD" },

                // Data Masking/Split
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L1', FirstName: 'Sarah', LastName: 'Johnson', Email: 's.johnson@gmail.com', _last_updated: '2022-10-04',  Salutation: 'Ms', Pronouns: 'She/Her'},

                // Data Stability
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C4', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B1', YTDSpend: 0},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C5', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-06', Brand: 'B2', YTDSpend: 100000},

                // Unmasking/Split
                { color: 'ff949d', _object_type: 'Contact', id: 'C6', FirstName: 'Elliot', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'c7feff', _object_type: 'Lead', id: 'L2', FirstName: 'Ellen', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'She/Her'},   
            ]
        },
        {
            title: 'Email Update - Unmasking Old Data',
            description: '',
            data:
            [
                // Data Mixing
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-02',  Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Euna', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-01', Salutation: 'Mrs.', Pronouns: 'She/Her', Title: "MD" },

                // Data Masking/Split
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L1', FirstName: 'Sarah', LastName: 'Johnson', Email: 's.johnson@gmail.com', _last_updated: '2022-10-04',  Salutation: 'Ms', Pronouns: 'She/Her'},

                // Data Stability
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C4', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-02', Brand: 'B1', YTDSpend: 0},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C5', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-06', Brand: 'B2', YTDSpend: 100000},

                // Unmasking/Split
                { color: 'ff949d', _object_type: 'Contact', id: 'C6', FirstName: 'Elliot', LastName: 'Page', Email: 'elliot.page@gmail.com', _last_updated: '2022-10-07',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'c7feff', _object_type: 'Lead', id: 'L2', FirstName: 'Ellen', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'She/Her'},   
            ]
        },
        {
            title: 'Big Spender Update',
            description: '',
            data:
            [
                // Data Mixing
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-02',  Suffix: 'Sr',},
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Euna', LastName: 'Smith', Email: 'Smiths@TheSmiths.com', _last_updated: '2022-10-01', Salutation: 'Mrs.', Pronouns: 'She/Her', Title: "MD" },

                // Data Masking/Split
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Jim', LastName: 'Johnson', Email: 'j.johnson@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L1', FirstName: 'Sarah', LastName: 'Johnson', Email: 's.johnson@gmail.com', _last_updated: '2022-10-04',  Salutation: 'Ms', Pronouns: 'She/Her'},

                // Data Stability
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C4', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-08', Brand: 'B1', YTDSpend: 0},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C5', FirstName: 'Dawn', LastName: 'R', Email: 'Dawn.R@gmail.com', _last_updated: '2022-10-06', Brand: 'B2', YTDSpend: 100000},

                // Unmasking/Split
                { color: 'ff949d', _object_type: 'Contact', id: 'C6', FirstName: 'Elliot', LastName: 'Page', Email: 'elliot.page@gmail.com', _last_updated: '2022-10-07',  Salutation: 'Mr', Pronouns: 'He/Him'},
                { color: 'c7feff', _object_type: 'Lead', id: 'L2', FirstName: 'Ellen', LastName: 'Page', Email: 'e.page@gmail.com', _last_updated: '2022-10-02',  Salutation: 'Ms', Pronouns: 'She/Her'},   
            ]
        }
    ]
});