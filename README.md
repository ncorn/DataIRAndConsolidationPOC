# DataIRAndConsolidationPOC


# Adding New Scenarios

1. Create a new scenario file
Scenario files are simply JS files that have a naming convention of "Scenario-{ScenarioName}.JS". Scenario files should only contain the following:

- Base scenario Object (see below)
- Scenario stesps
- Scenario data
- Code to add the scenario to the list of available scenarios

2. Add the base scenario object to the scenario file

```

var scenarioMultipleEmails = {
    id: '{ID of the new scenario}',
    title: '{Title of this scenario}',
    mode: { Mode used to consolidate data for unified individuals: 'Consoidate' || ''},
    matchKey: 'Email', # Property of an object used to match individuals together. Defaulting to Email for current usecases
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'ffd9f7', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'cccfff', object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-02' },
                { color: 'ffcccc', object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Update Email Address',
            description: '',
            data:
            [
                { color: 'ffd9f7', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-05' },
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'cccfff', object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-02' },
                { color: 'ffcccc', object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
            ]
        }
    ]
};

```


3. Add the new scenario to the list of available scenarios
In the new scenario file push the scenario object into the global array of available scenarios.



Once the new scenario file is complete the new scenario file must be included in index.html. This must be done in the section marked for scenario files.




3. Add the data steps to the scenario object