var scenarioMultipleEmails = {
    title: 'Changing Emails',
    mode: 'Consoidate',
    matchKey: 'Email',
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
                { color: 'ffd9f7', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-01' },
                { color: 'fffead', object_type: 'Lead', id: 'L1', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-01' },
                { color: 'cccfff', object_type: 'Lead', id: 'L3', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-03' },
                { color: 'ccffcf', object_type: 'Lead', id: 'L2', FirstName: 'Nathan', LastName: 'Smith', Email: 'personal@nsmith.com', last_updated: '2022-10-02' },
                { color: 'ffcccc', object_type: 'Lead', id: 'L4', FirstName: 'Nathan', LastName: 'Smith', Email: 'business@nsmith.com', last_updated: '2022-10-04' },
            ]
        }
    ]
};

scenarios.push(scenarioMultipleEmails);

/*
var colors = [
    'ffdbd9',
    'ffeed9',
    'feffd9',
    'd9ffda',
    'd9feff',
    'dbd9ff',
    'f2d9ff',
    'ffd9f7',
    'ffd9da'
];
*/

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