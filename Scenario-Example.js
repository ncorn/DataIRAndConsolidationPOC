scenarios.push(
    {
        id: '{ID of the new scenario}',
        title: '{Title of this scenario}',
        mode: 'Consolidate', //{ Mode used to consolidate data for unified individuals: 'Consolidate' || 'PickAWinner'},
        matchKey: 'Email', // Property of an object used to match individuals together. Defaulting to Email for current usecases.
        steps: 
        [
            {
                title: '{Title of this step in the scenario}',
                description: '{Description of this step in the scenario}',
                data:
                [
                    // Example Lead & Contact
                    // { color: 'ffd9f7', object_type: 'Contact', id: 'C1', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                    // { color: 'ffd9f7', object_type: 'Lead', id: 'L1', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
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