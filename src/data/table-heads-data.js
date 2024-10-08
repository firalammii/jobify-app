import * as colors from '../css/global.scss';
export const usersTableHeads = [
    { id: 1, label: "No :", styles: { width: "60px" } },
    { id: 2, label: "profile pic", styles: { width: "100px" } },
    { id: 3, label: "full_Name", styles: { width: "200px", justifyContent: "flex-start", } },
    { id: 4, label: "email", styles: { width: "100px" } },
    { id: 5, label: "role", styles: { width: "150px", justifyContent: "flex-start", } },

];
export const tableHeads = [
    { id: 1, label: "No :", },
    { id: 2, label: "Avatar", },
    { id: 3, label: "Full Name", },
    { id: 4, label: "Email", },
    { id: 5, label: "Roles", }
];
export const jobsTableHeads = [
    { id: 1, label: "No :", },
    { id: 2, label: "Title", },
    { id: 3, label: "Job Type", },
    { id: 4, label: "Salary", },
    { id: 5, label: "Experience", },
    // { id: 6, label: "Remote Options", },
    { id: 7, label: "Location", },
    { id: 8, label: "Posted Date", },
    { id: 9, label: "Status", },
];

export const customersTableHeads = [
    [
        { id: 1, label: "No :", styles: { width: "100px" } },
        { id: 2, label: "full_Name", styles: { width: "260px", justifyContent: "flex-start" } },
        { id: 3, label: "tel-No", styles: { width: "100px" } },
        { id: 4, label: "address", styles: { justifyContent: "flex-start", width: "180px" } },
        { id: 5, label: "contract_no", styles: { width: "110px" } },
        { id: 6, label: "payment_status", tooltipTitle: "payment_status (this month)", styles: { justifyContent: "flex-start", width: "130px" } },
        { id: 7, label: "curr_cons", tooltipTitle: "curr_usage in cubic mtrs", styles: { backgroundColor: colors.hoverSky, justifyContent: "center", width: "100px" } },
        { id: 8, label: "tot_usage", tooltipTitle: "this year usage in cubic mtrs", styles: { backgroundColor: colors.hoverBlue, justifyContent: "center", width: "100px" } },
        { id: 9, label: "Last_read_date", styles: { justifyContent: "flex-start", width: "160px" } },
        // { id: 10, label: "actions", styles: { width: "100px" } },
    ],
    [
        { id: 1, label: "No :", styles: { width: "100px" } },
        { id: 6, label: "payment_status", tooltipTitle: "payment_status (this month)", styles: { width: "130px" } },
        { id: 2, label: "full_Name", styles: { width: "260px" } },
        { id: 3, label: "tel-No", styles: { width: "100px" } },
        { id: 4, label: "address", styles: { justifyContent: "flex-start", width: "180px" } },
        { id: 5, label: "contract_no", styles: { width: "110px" } },
        { id: 7, label: "curr_cons", tooltipTitle: "curr_usage in cubic mtrs", styles: { backgroundColor: colors.hoverSky, justifyContent: "center", width: "100px" } },
        { id: 8, label: "tot_usage", tooltipTitle: "this year usage in cubic mtrs", styles: { backgroundColor: colors.hoverBlue, justifyContent: "center", width: "100px" } },
        { id: 9, label: "Last_read_date", styles: { justifyContent: "flex-start", width: "160px" } },
        // { id: 10, label: "actions", styles: { width: "100px" } },
    ],
];

export const consumptionsTableHeads = [
    { id: 1, label: "year", fullLabel: "year", styles: { width: "55px", } },
    { id: 2, label: "month", fullLabel: "month", styles: { width: "80px", } },
    { id: 3, label: "mtr_dia", fullLabel: "meter diameter", styles: { width: "80px", } },
    { id: 4, label: "mainte-", fullLabel: "maintenance", styles: { width: "80px", } },
    { id: 5, label: "sanita-", fullLabel: "sanitation", styles: { width: "80px" } },
    { id: 6, label: "mtr-rnt", fullLabel: "meter rent", styles: { width: "80px" } },
    { id: 7, label: "old_mtr", fullLabel: "last reading of old meter", styles: { width: "80px" } },
    { id: 8, label: "prev-rdg", fullLabel: "previous reading", styles: { width: "80px" } },
    { id: 9, label: "curr-rdg", fullLabel: "current reading", styles: { width: "80px" } },
    { id: 10, label: "curr-cons", fullLabel: "current consumption/difference", styles: { width: "80px" } },
    { id: 11, label: "wtr-cons", fullLabel: "water consumption", styles: { width: "80px" } },
    { id: 12, label: "old_mtr-cons", fullLabel: "old meter consumption", styles: { width: "120px" } },
    { id: 13, label: "tot-cons", fullLabel: "total consumption", styles: { width: "80px" } },
    { id: 14, label: "bill-amnt", fullLabel: "bill amount", styles: { width: "80px" } },
    { id: 15, label: "debit-30", fullLabel: "debit 30 days", styles: { width: "80px" } },
    { id: 16, label: "debit-30_60", fullLabel: "debit between 30 and 60 days", styles: { width: "100px" } },
    { id: 17, label: "debit_60", fullLabel: "debit over 60 days", styles: { width: "80px" } },
    { id: 18, label: "tot-amnt", fullLabel: "total amount including all debits", styles: { width: "80px" } },
    { id: 19, label: "payment-sts", fullLabel: "payment status", styles: { width: "100px", } },
    { id: 20, label: "rdg-date", fullLabel: "reading date", styles: { width: "160px", } },
];

export const rowsPerPageData = [
    { rowspp: 8, isSelected: false },
    { rowspp: 10, isSelected: true },
    { rowspp: 20, isSelected: false }
];