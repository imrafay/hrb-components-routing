function Table({data,config}){
 const headerColumns = config.map((item)=>{
    return <th key={item.label}>
        {item.label}
    </th>
 });

 const rows = data.map((rowData)=>{
    const columns = config.map((col)=>{
        return <td className="p-2" key={col.label}>
            {col.render(rowData)}
        </td>
     });

     return <tr className="border-b border-black" key={rowData.name}>
            {columns}
        </tr>
 });

    
return (<div>
    <table className="m-5 p-3">
        <thead>
            <tr className="border-b border-black">
                {headerColumns}
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
</div>);
}
export default Table;
