var scen4 = {
    id: 'MultLeads',
    title: 'Multiple Leads',
    mode: 'Consolidate',
    matchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data: [
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-02' },

                { color: 'cccfff', object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Add A New Contact',
            description: '',
            data:
            [
                { color: 'ffd9f7', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-05' },
        
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-02' },
        
                { color: 'cccfff', object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
            ]
        },
        {
            title: 'Update Contact Email',
            description: '',
            data:
            [
                { color: 'ffd9f7', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-06' },
        
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-02' },
        
                { color: 'cccfff', object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ffcccc', object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
            ]
        }
    ]
}

scenarios.push(scen4);//, scen2, scen3, scen4);


// https://developer.salesforce.com/docs/atlas.en-us.238.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm
// https://developer.salesforce.com/docs/atlas.en-us.238.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm

/*
{
AccountId: '',
AssistantName: '',
AssistantPhone: '',
Birthdate: '',
CanAllowPortalSelfReg: '',
CleanStatus: '',
ConnectionReceivedId: '',
ConnectionSentId: '',
Department: '',
Description: '',
DoNotCall: '',
Email: '',
EmailBouncedDate: '',
EmailBouncedReason: '',
Fax: '',
FirstCallDateTime: '',
FirstEmailDateTime: '',
FirstName: '',
HasOptedOutOfEmail: '',
HasOptedOutOfFax: '',
HomePhone: '',
IndividualId: '',
IsDeleted: '',
IsEmailBounced: '',
IsPersonAccount: '',
Jigsaw: '',
LastActivityDate: '',
LastName: '',
LastReferencedDate: '',
LastViewedDate: '',
LeadSource: '',
MailingAddress: '',
MailingCity: '',
MailingState: '',
MailingCountry: '',
MailingPostalCode: '',
MailingStateCode: '',
MailingCountryCode: '',
MailingStreet: '',
MailingGeocodeAccuracy: '',
MailingLatitude: '',
MailingLongitude: '',
MasterRecordId: '',
MiddleName: '',
MobilePhone: '',
Name: '',
OtherAddress: '',
OtherCity: '',
OtherCountry: '',
OtherPostalCode: '',
OtherState: '',
OtherCountryCode: '',
OtherStateCode: '',
OtherGeocodeAccuracy: '',
OtherLatitude: '',
OtherLongitude: '',
OtherPhone: '',
OtherStreet: '',
OwnerId: '',
Phone: '',
PhotoUrl: '',
RecordTypeId: '',
ReportsToId: '',
Salutation: '',
Suffix: '',
Title: '',
}
*/

/*
AccountId
AssistantName
AssistantPhone
Birthdate
CanAllowPortalSelfReg
CleanStatus
ConnectionReceivedId
ConnectionSentId
Department
Description
DoNotCall
Email
EmailBouncedDate
EmailBouncedReason
Fax
FirstCallDateTime
FirstEmailDateTime
FirstName
HasOptedOutOfEmail
HasOptedOutOfFax
HomePhone
IndividualId
IsDeleted
IsEmailBounced
IsPersonAccount
Jigsaw
LastActivityDate
LastName
LastReferencedDate
LastViewedDate
LeadSource
MailingAddress
MailingCity
MailingState
MailingCountry
MailingPostalCode
MailingStateCode
MailingCountryCode
MailingStreet
MailingGeocodeAccuracy
MailingLatitude
MailingLongitude
MasterRecordId
MiddleName
MobilePhone
Name
OtherAddress
OtherCity
OtherCountry
OtherPostalCode
OtherState
OtherCountryCode
OtherStateCode
OtherGeocodeAccuracy
OtherLatitude
OtherLongitude
OtherPhone
OtherStreet
OwnerId
Phone
PhotoUrl
RecordTypeId
ReportsToId
Salutation
Suffix
Title
*/