import { useState } from "react";

function Accordion({values}) {
const [expendIndex,setExpendIndex] = useState(-1);

  const handleClick = (_index) =>
  {
    if(_index === expendIndex){
      setExpendIndex(-1);
    }
    else{
      setExpendIndex(_index);
    }
  };

  const result = values.map((item,index)=>{
    const isExpended = index === expendIndex;
      return (
        <div key={index}>
          <div className="flex bg-gray-400 borde border-gray-800 p-2 cursor-pointer" onClick={()=>handleClick(index)}>{item.label}</div>
          {isExpended && <div className="flex bg-gray-200 borde border-b p-3">{item.content}</div>}
        </div>
      );
    });

    return (
      <div className="w-96 p-2 rounded">{result}</div>
    );
  }
  
export default Accordion;