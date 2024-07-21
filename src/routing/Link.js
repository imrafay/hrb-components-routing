import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

function Link({to, children, className}){
    const {navigate} = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();
        navigate(to);
    }; 

    return (<a className={className} href={to} onClick={handleClick}>{children}</a>);
}

export default Link;