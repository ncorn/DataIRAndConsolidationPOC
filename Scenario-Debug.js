scenarios.push({
    id: 'Debug',
    title: 'Debugging',
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
                { color: 'fffead', _object_type: 'Lead', id: 'L1', Email: 'e1@d1.com', _created_date: '2022-01-05', _last_updated: '2022-10-01'},
                { color: 'ffcccc', _object_type: 'Lead', id: 'L3', Email: 'e1@d1.com', _created_date: '2022-01-03', _last_updated: '2022-10-01'},
                { color: 'cccfff', _object_type: 'Lead', id: 'L2', Email: 'e1@d1.com', _created_date: '2022-01-01', _last_updated: '2022-10-01'},
                { color: 'ffcb94', _object_type: 'Lead', id: 'L4', Email: 'e1@d1.com', _created_date: '2022-01-04', _last_updated: '2022-10-01'},

                { color: 'fffead', _object_type: 'Contact', id: 'C1', Email: 'e1@d12.com', _created_date: '2022-01-05', _last_updated: '2022-10-01'},
                { color: 'ffcccc', _object_type: 'Contact', id: 'C3', Email: 'e1@d12.com', _created_date: '2022-01-03', _last_updated: '2022-10-01'},
                { color: 'cccfff', _object_type: 'Contact', id: 'C2', Email: 'e1@d12.com', _created_date: '2022-01-01', _last_updated: '2022-10-01'},
                { color: 'ffcb94', _object_type: 'Contact', id: 'C4', Email: 'e1@d12.com', _created_date: '2022-01-04', _last_updated: '2022-10-01'},
            ]
        }
    ]
});