import { useState } from "react";
import Table from "./Table";

function SortedTable({...props}){
    const {config, data} = props;
    const [sortOrder,setSortOrder] = useState(null);
    const [sortBy,setSortBy] = useState(null);

    const SortColumn = (label)=>{
        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else if(sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const sortedConfig = config.map((item)=>{
        if(item.sortValue){
            const header = <th onClick={()=>SortColumn(item.label)}>^ {item.label}</th>
            item = {...item,header}
        }
        return item;
    });

    let sortedData = data;
    if(sortBy && sortOrder){
        const {sortValue} = config.find((x)=>x.label === sortBy);

        sortedData = [...data].sort((a,b)=>{
                const valueA = sortValue(a);
                const valueB = sortValue(b);

            const reverse = (sortOrder === 'asc') ? 1:-1;

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverse;
            }
            else{
                return (valueA - valueB) * reverse;
            }
        });
    }

    return (
        <Table {...props} data={sortedData} config={sortedConfig}/>
    )
}

export default SortedTable;