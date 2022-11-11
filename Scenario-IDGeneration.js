scenarios.push({
    id: 'IDGenClusterValue-Transform',
    title: 'IR - Cluster ID Gen - Transform',
    uidMode: 'Cluster',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', _last_updated: '2022-10-02' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-AddSubtract',
    title: 'IR - Cluster ID Gen - Add/Subtract',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Append Lead 1',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Append Lead 2',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
            ]
        },
        {
            title: 'Append Lead 3',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-04' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Rekey',
    title: 'IR - Cluster ID Gen - Rekey',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 1',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-05' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 2',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-05' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Rekey 3',
            description: '',
            data:[
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-05' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-07' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-04' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Succession',
    title: 'IR - Cluster ID Gen - Succession',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Cluster Succession 1',
            description: '',
            data:
            [
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Cluster Succession 2',
            description: '',
            data:
            [
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-02' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Cluster Succession 3',
            description: '',
            data:
            [
                { color: 'ffcccc', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', _last_updated: '2022-10-01' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Succession-Update',
    title: 'IR - Cluster ID Gen - Split:Subtract-Add',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Succession Update 1',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'School@Domain.com', _last_updated: '2022-10-05' },
            ]
        },
        {
            title: 'Succession Update 2',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Home@Domain.com', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'School@Domain.com', _last_updated: '2022-10-05' },
            ]
        },
        {
            title: 'Succession Update 2',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Work@Domain.com', _last_updated: '2022-10-07' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Home@Domain.com', _last_updated: '2022-10-06' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'School@Domain.com', _last_updated: '2022-10-05' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Split-Succession-Add',
    title: 'IR - Cluster ID Gen - Split:Succession-Add',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Split 1',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Personal@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Split 2',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Personal@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Business@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', _last_updated: '2022-10-02' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Takeover',
    title: 'IR - Cluster ID Gen - Takeover',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', _last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Cluster Takeover 1',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', _last_updated: '2022-10-02' },

                { color: 'ffd9f7', _object_type: 'Contact', id: 'C4', FirstName: 'Logan', LastName: 'Bu', Email: 'LoganB@Domain.com', _last_updated: '2022-10-05' },
            ]
        },
        {
            title: 'Cluster Takeover 2',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', _last_updated: '2022-10-02' },

                { color: 'ffd9f7', _object_type: 'Contact', id: 'C4', FirstName: 'Logan', LastName: 'Bu', Email: 'LoganB@Domain.com', _last_updated: '2022-10-05' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C5', FirstName: 'Nathan', LastName: 'Co', Email: 'NathanC@Domain.com', _last_updated: '2022-10-06' },
            ]
        },
        {
            title: 'Cluster Takeover 3',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', _last_updated: '2022-10-04' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', _last_updated: '2022-10-02' },

                { color: 'ffd9f7', _object_type: 'Contact', id: 'C4', FirstName: 'Logan', LastName: 'Bu', Email: 'LoganB@Domain.com', _last_updated: '2022-10-05' },
                { color: 'ffcccc', _object_type: 'Contact', id: 'C5', FirstName: 'Nathan', LastName: 'Co', Email: 'NathanC@Domain.com', _last_updated: '2022-10-06' },
                { color: 'ffc9fb', _object_type: 'Contact', id: 'C6', FirstName: 'Kevin', LastName: 'Ki', Email: 'KevinK@Domain.com', _last_updated: '2022-10-07' },

            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Hop',
    title: 'IR - Cluster ID Gen - Hop',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', _last_updated: '2022-10-03' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', _last_updated: '2022-10-03' },
            ]
        },
        {
            title: 'Add new Contact',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', _last_updated: '2022-10-03' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', _last_updated: '2022-10-03' },

                { color: 'c7feff', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', _last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Cluster Hop 1',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', _last_updated: '2022-10-03' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', _last_updated: '2022-10-03' },

                { color: 'c7feff', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', _last_updated: '2022-10-05' },

            ]
        },
        {
            title: 'Cluster Hop 2',
            description: '',
            data:
            [
                { color: 'fffead', _object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', _last_updated: '2022-10-03' },
                { color: 'ccffcf', _object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', _last_updated: '2022-10-03' },
                { color: 'cccfff', _object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', _last_updated: '2022-10-03' },

                { color: 'c7feff', _object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', _last_updated: '2022-10-06' },

            ]
        }
    ]
});