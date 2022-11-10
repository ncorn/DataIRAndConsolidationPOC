scenarios.push(
    {
        id: '{ID of the new scenario}',
        title: '{Title of this scenario}',
        consolidationMode: 'Consolidate', //{ Mode used to consolidate data for unified individuals: 'Consolidate' || 'PickAWinner'},
        irMatchKey: 'Email', // Property of an object used to match individuals together. Defaulting to Email for current usecases.
        steps: 
        [
            {
                title: '{Title of this step in the scenario}',
                description: '{Description of this step in the scenario}',
                data:
                [
                    // Example Lead & Contact
                    // { color: 'ffd9f7', _object_type: 'Contact', id: 'C1', Email: 'personal@nsmith.com', _last_updated: '2022-10-01' },
                    // { color: 'ffd9f7', _object_type: 'Lead', id: 'L1', Email: 'personal@nsmith.com', _last_updated: '2022-10-01' },
                ]
            },
            {
                title: '{Title of this step in the scenario}',
                description: '{Description of this step in the scenario}',
                data:
                [
                ]
            }
        ]
    }
);