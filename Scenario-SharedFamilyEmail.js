var scenarioSharedFamilyEmail = {
    title: 'Shared Family Email',
    mode: 'Consoidate',
    matchKey: 'Email',
    data: [
        [
            { color: 'fffead', object_type: 'Contact', id: 'C1', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', last_updated: '2022-10-01', relationship: 'Father', Salutation: 'Mr', Suffix: 'Sr',},
            { color: 'ccffcf', object_type: 'Contact', id: 'C2', FirstName: 'Nathan', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', last_updated: '2022-10-02', relationship: 'Son', Salutation: 'Mr', Suffix: 'Jr', },
            { color: 'cccfff', object_type: 'Contact', id: 'C3', FirstName: 'Isaac', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', last_updated: '2022-10-03', relationship: 'Son'},
            { color: 'ffcccc', object_type: 'Contact', id: 'C4', FirstName: 'Avery', LastName: 'Smith', Email: 'SmithFamily@TheSmiths.com', last_updated: '2022-10-04', relationship: 'Daughter'},
        ]
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