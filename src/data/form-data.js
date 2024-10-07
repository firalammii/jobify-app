
export const getUserEditionData = modal => ([
    { id: 1, htmlId: "firstName-uedit", label: "first name", value: modal?.firstName, disable: true, editable: false, },
    { id: 2, htmlId: "lastName-uedit", label: "last name", value: modal?.lastName, disable: true, editable: false, },
    { id: 3, htmlId: "username-uedit", label: "username", value: modal?.username, disable: true, editable: false, },
    { id: 4, htmlId: "password-uedit", label: "password", value: "", disable: true, editable: false, },
    { id: 5, htmlId: "cpassword-uedit", label: "confirm password", value: "", disable: true, editable: false, },
    { id: 6, htmlId: "role-uedit", label: "role", value: modal?.roles, disable: true, editable: false, },

]);

export const getProfileEditionData = currUser => ([
    { id: 1, type: "text", regexType: "name", htmlId: "firstName-pedit", label: "first name", name: "firstName", value: currUser?.firstName, disable: true, editable: true, error: false, },
    { id: 2, type: "text", regexType: "name", htmlId: "middleName-pedit", label: "middle name", name: "middleName", value: currUser?.middleName, disable: true, editable: true, error: false, },
    { id: 3, type: "text", regexType: "name", htmlId: "lastName-pedit", label: "last name", name: "lastName", value: currUser?.lastName, disable: true, editable: true, error: false, },
    { id: 4, type: "tel", regexType: "tel", htmlId: "telNo-pedit", label: "phone number", name: "telNo", value: currUser?.telNo, disable: true, editable: true, error: false, },
    { id: 5, type: "text", regexType: "id", htmlId: "company_id-pedit", label: "Work-Id", name: "companyId", value: currUser?.companyId, disable: true, editable: true, error: false, },
    { id: 6, type: "select", regexType: "role", options: ["admin", "front-desk"], htmlId: "role-pedit", label: "role", name: "role", value: currUser?.role, disable: true, editable: true, error: false, },
    { id: 7, type: "userpp", regexType: "userPp", htmlId: "userpp-pedit", label: "profile pic", name: "userPp", value: currUser?.userPp, disable: true, editable: true, error: false, },
]);

export const customerRegistrationData = [
    { id: 1, defaultValue: "", regexType: "name", htmlId: "firstName-creg", type: "text", label: "first name", value: "firstName", required: true, error: false, },
    { id: 2, defaultValue: "", regexType: "name", htmlId: "middleName-creg", type: "text", label: "middle name", value: "middleName", required: true, error: false, },
    { id: 3, defaultValue: "", regexType: "name", htmlId: "lastName-creg", type: "text", label: "last name", value: "lastName", required: true, error: false, },
    { id: 4, defaultValue: "09", regexType: "tel", htmlId: "telNo-creg", type: "tel", label: "phone number", value: "telNo", required: true, error: false, },
    { id: 5, defaultValue: "Boolee", regexType: "subcity", htmlId: "subcity-creg", type: "select", label: "address, (subcity)", value: "subcity", options: [], required: true, error: false, },
    { id: 6, defaultValue: "Gooroo", regexType: "kebele", htmlId: "kebele-creg", type: "select", label: "address, (kebele)", value: "kebele", options: [], required: true, error: false, },
    { id: 7, defaultValue: "123456", regexType: "contractNum", htmlId: "contract_number-creg", type: "number", label: "contract number", value: "contract_number", required: true, error: false, },
    { id: 8, defaultValue: "cust01", regexType: "custId", htmlId: "custId", type: "text", label: "Cust Id", value: "custId", required: true, error: false, },
];
