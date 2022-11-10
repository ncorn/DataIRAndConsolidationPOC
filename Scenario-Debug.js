var scenarioSharedFamilyEmail = {
    title: 'Debugging',
    consolidationMode: 'Consolidate',
    irMatchKey: 'Email',
    steps: 
    [
        {
            title: 'Initial Data',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Lead', id: 'L1', Email: 'e1@d1.com', last_updated: '2022-10-01'},
                { color: 'ffcccc', object_type: 'Lead', id: 'L3', Email: 'e1@d1.com', last_updated: '2022-10-01'},

                { color: 'cccfff', object_type: 'Lead', id: 'L2', Email: 'e12@d12.com', last_updated: '2022-10-01'},
                { color: 'cccfff', object_type: 'Lead', id: 'L4', Email: 'e12@d12.com', last_updated: '2022-10-01'},
            ]
        },
        {
            title: 'Complete Replace',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', Email: 'e1@d1.com', last_updated: '2022-10-01'},
                { color: 'fffead', object_type: 'Lead', id: 'L1', Email: 'e1@d1.com', last_updated: '2022-10-01'},
                { color: 'ffcccc', object_type: 'Lead', id: 'L3', Email: 'e1@d1.com', last_updated: '2022-10-01'},

                { color: 'cccfff', object_type: 'Lead', id: 'L2', Email: 'e12@d12.com', last_updated: '2022-10-01'},
                { color: 'cccfff', object_type: 'Lead', id: 'L4', Email: 'e12@d12.com', last_updated: '2022-10-01'},
            ]
        },
        {
            title: 'Complete Replace',
            description: '',
            data:
            [
                { color: 'fffead', object_type: 'Contact', id: 'C1', Email: 'e12@d12.com', last_updated: '2022-10-01'},
                { color: 'fffead', object_type: 'Lead', id: 'L1', Email: 'e1@d1.com', last_updated: '2022-10-01'},
                { color: 'ffcccc', object_type: 'Lead', id: 'L3', Email: 'e1@d1.com', last_updated: '2022-10-01'},

                { color: 'cccfff', object_type: 'Lead', id: 'L2', Email: 'e12@d12.com', last_updated: '2022-10-01'},
                { color: 'cccfff', object_type: 'Lead', id: 'L4', Email: 'e12@d12.com', last_updated: '2022-10-01'},
            ]
        }
    ]
}

scenarios.push(scenarioSharedFamilyEmail);

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