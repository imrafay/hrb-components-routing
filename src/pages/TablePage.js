import Table from "../components/Table";
function TablePage(){

    const data =[
        {
            name:"Germany",
            code:"DE",
            currency:"EURO"
        },
        {
            name:"Pakistan",
            code:"Pk",
            currency:"PKR"
        },
        {
            name:"India",
            code:"In",
            currency:"INR"
        },
        {
            name:"UAE",
            code:"UAE",
            currency:"DIR"
        }
    ]

   const config = [
        {
            label:"Country",
            render: (item) => item.name
        },
        {
            label:"Code",
            render: (item) => item.code
        },
        {
            label:"Currency",
            render: (item) => item.currency
        },
    ];

    return (<Table data={data} config={config} />);
    }
    export default TablePage;
    