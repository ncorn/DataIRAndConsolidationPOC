var journeyHistoryStep1 = [
    {historyId: 1, timestamp: '2022-01-01', Activity: 'Send Email'},
    {historyId: 2, timestamp: '2022-01-01', Activity: 'Wait: 7 Days'},
    {historyId: 3, timestamp: '2022-01-02', Activity: 'Send Email'}
];

scenarios.push({
    id: 'JourneyHistory-Rekey',
    title: 'Journey History - Rekey',
    mode: 'PickAWinner',
    matchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-01' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04', JourneyHistory: journeyHistoryStep1 },
            ]
        },
        {
            title: 'Rekey 1',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-05' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-02' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04', JourneyHistory: journeyHistoryStep1 },
            ]
        },
        {
            title: 'Rekey 2',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-05' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-06' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04', JourneyHistory: journeyHistoryStep1 },
            ]
        },
        {
            title: 'Rekey 3',
            description: '',
            data:[
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-05' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-06' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-07' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04', JourneyHistory: journeyHistoryStep1 },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Succession',
    title: 'IR - Cluster ID Gen - Succession',
    mode: 'Consoidate',
    matchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-02' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Cluster Succession 1',
            description: '',
            data:
            [
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-02' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Cluster Succession 2',
            description: '',
            data:
            [
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-02' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-01' },
            ]
        },
        {
            title: 'Cluster Succession 3',
            description: '',
            data:
            [
                { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-01' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Succession-Update',
    title: 'IR - Cluster ID Gen - Succession - Update',
    mode: 'Consoidate',
    matchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Succession Update 1',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'School@Domain.com', last_updated: '2022-10-05' },
            ]
        },
        {
            title: 'Succession Update 2',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Throwaway@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Home@Domain.com', last_updated: '2022-10-06' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'School@Domain.com', last_updated: '2022-10-05' },
            ]
        },
        {
            title: 'Succession Update 2',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'Work@Domain.com', last_updated: '2022-10-07' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'Home@Domain.com', last_updated: '2022-10-06' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'School@Domain.com', last_updated: '2022-10-05' },
            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Takeover',
    title: 'IR - Cluster ID Gen - Takeover',
    mode: 'Consoidate',
    matchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', last_updated: '2022-10-02' },
            ]
        },
        {
            title: 'Cluster Takeover 1',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', last_updated: '2022-10-02' },

                { color: 'ffd9f7', object_type: 'Contact', id: 'C4', FirstName: 'Logan', LastName: 'Bu', Email: 'LoganB@Domain.com', last_updated: '2022-10-05' },
            ]
        },
        {
            title: 'Cluster Takeover 2',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', last_updated: '2022-10-02' },

                { color: 'ffd9f7', object_type: 'Contact', id: 'C4', FirstName: 'Logan', LastName: 'Bu', Email: 'LoganB@Domain.com', last_updated: '2022-10-05' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C5', FirstName: 'Nathan', LastName: 'Co', Email: 'NathanC@Domain.com', last_updated: '2022-10-06' },
            ]
        },
        {
            title: 'Cluster Takeover 3',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Logan', LastName: 'B', Email: 'LoganB@Domain.com', last_updated: '2022-10-04' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanC@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Kevin', LastName: 'K', Email: 'KevinK@Domain.com', last_updated: '2022-10-02' },

                { color: 'ffd9f7', object_type: 'Contact', id: 'C4', FirstName: 'Logan', LastName: 'Bu', Email: 'LoganB@Domain.com', last_updated: '2022-10-05' },
                { color: 'ffcccc', object_type: 'Contact', id: 'C5', FirstName: 'Nathan', LastName: 'Co', Email: 'NathanC@Domain.com', last_updated: '2022-10-06' },
                { color: 'ffc9fb', object_type: 'Contact', id: 'C6', FirstName: 'Kevin', LastName: 'Ki', Email: 'KevinK@Domain.com', last_updated: '2022-10-07' },

            ]
        }
    ]
});

scenarios.push({
    id: 'IDGenClusterValue-Hop',
    title: 'IR - Cluster ID Gen - Hop',
    mode: 'Consoidate',
    matchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', last_updated: '2022-10-03' },
            ]
        },
        {
            title: 'Add new Contact',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', last_updated: '2022-10-03' },

                { color: 'c7feff', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Cluster Hop 1',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', last_updated: '2022-10-03' },

                { color: 'c7feff', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', last_updated: '2022-10-05' },

            ]
        },
        {
            title: 'Cluster Hop 2',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCGeneral@Domain.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCHome@Domain.com', last_updated: '2022-10-03' },
                { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', last_updated: '2022-10-03' },

                { color: 'c7feff', object_type: 'Contact', id: 'C4', FirstName: 'Nathan', LastName: 'C', Email: 'NathanCWork@Domain.com', last_updated: '2022-10-06' },

            ]
        }
    ]
});