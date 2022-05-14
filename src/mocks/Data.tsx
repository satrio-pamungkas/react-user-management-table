const dataMock = () => [
    {
        first_name: "Satrio",
        last_name: "Pamungkas",
        email: "adw@gmail.com",
        phone_number: "0823232323",
        gender: "Male",
        street_address: "Bandung ID 40287"
    },
    {
        first_name: "Ahmad",
        last_name: "Raihan",
        email: "adw@gmail.com",
        phone_number: "0823232323",
        gender: "Male",
        street_address: "Bandung ID 40287"
    }
];

const columnMock = [
    {
        Header: "First Name",
        accessor: "first_name"
    },
    {
        Header: "Last Name",
        accessor: "last_name"
    },
    {
        Header: "Email Address",
        accessor: "email"
    },
    {
        Header: "Phone Number",
        accessor: "phone_number"
    },
    {
        Header: "Gender",
        accessor: "gender"
    },
    {
        Header: "Street Address",
        accessor: "street_address"
    },
];

const MockData = { dataMock, columnMock };
export default MockData;

