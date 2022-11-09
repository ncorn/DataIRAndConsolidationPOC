# DataIRAndConsolidationPOC


# Adding New Scenarios

1. Create a new scenario file
Scenario files are simply JS files that have a naming convention of "Scenario-{ScenarioName}.JS". Scenario files should only contain the following:

- Base scenario Object (see below)
- Scenario stesps
- Scenario data
- Code to add the scenario to the list of available scenarios

New scenario files can be created from "Scenario-Example.js". This file contains a blank default scenario and adds it to the avilable scenarios.



2. Add the new scenario to the list of available scenarios
Once the new scenario file is complete the new scenario file must be included in index.html. This must be done in the section marked for scenario files.

3. Add the data steps to the scenario object