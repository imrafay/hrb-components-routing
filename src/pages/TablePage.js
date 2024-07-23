import Table from "../components/Table";
import SortedTable from "../components/SortedTable";

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
            render: (item) => item.name,
            sortValue: (item)=> item.name
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

    return (<SortedTable data={data} config={config} />);
    }
    export default TablePage;
    