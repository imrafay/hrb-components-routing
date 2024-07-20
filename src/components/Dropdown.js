import { useState } from "react";

function Dropdown({options,onChange,value}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlOptionClick = (option) => {
    setIsOpen(false)
    onChange(option);
  };

  const optionList = options.map((item,index) => {
    return <div className="rounded-b-lg">
      <div className="hover:bg-blue-400 border border-blue-400 bg-blue-200 cursor-pointer px-2 py-4" onClick={() => handlOptionClick(item)} key={item.key}>{item.value}</div>
    </div>
  });
  
  return (
   <div className="w-60 m-2">
    <div className="rounded-lg border border-blue-400 bg-blue-200 cursor-pointer px-2 py-4" onClick={handleClick}>
    {value?.value || 'Select...'}
    </div>
    {isOpen && optionList}
   </div>
  );
}

export default Dropdown;
