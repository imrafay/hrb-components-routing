import { useContext } from "react";
import  NavigationContext  from "../context/NavigationContext";

function Route({to,children}){
    const {currentPath} = useContext(NavigationContext);
    if(to === currentPath){
        return children;
    }
    return null;
}
export default Route;