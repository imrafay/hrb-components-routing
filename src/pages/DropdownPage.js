import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleChange = (value)=>{
        setSelection(value);
    };

    const countries = [
        {
            key:"pk",
            value:"Pakistan"
        },
        {
            key:"in",
            value:"India"
        },
        {
            key:"de",
            value:"Germany"
        }
    ];
  return (
    <div className="flex justify-center">
        <Dropdown options={countries} onChange={handleChange} value={selection}/>
    </div>
  );
}

export default DropdownPage;
