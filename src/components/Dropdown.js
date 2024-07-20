import { useEffect, useRef, useState } from "react";

function Dropdown({options,onChange,value}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownElement = useRef();

  useEffect(()=>{
    const handleClickDocument = (event)=>{
      if(!dropdownElement.current.contains(event.target)){
        setIsOpen(false);
      }
    };

    document.addEventListener('click',handleClickDocument,true);

    return () => {
      document.removeEventListener('click',handleClickDocument);
    };
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlOptionClick = (option) => {
    setIsOpen(false)
    onChange(option);
  };

  const optionList = options.map((item,index) => {
    return <div>
      <div className="hover:bg-blue-100 cursor-pointer px-4 py-3 text-blue-400" onClick={() => handlOptionClick(item)} key={item.key}>{item.value}</div>
    </div>
  });
  
  return (
   <div ref={dropdownElement} className="w-60 m-2">
    <div className="rounded-lg border border-blue-400 bg-blue-50 cursor-pointer px-4 py-3" onClick={handleClick}>
    {value?.value || 'Select...'}
    </div>
    {isOpen && <div className="rounded-lg border border-blue-400 bg-blue-50">{optionList}</div>}
   </div>
  );
}

export default Dropdown;
