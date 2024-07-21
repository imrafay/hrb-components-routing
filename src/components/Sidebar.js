import Link from "../routing/Link"

function Sidebar(){
    const list = [
        {
            label:"Accordions",
            path: "/accordion"
        },
        {
            label:"Dropdowns",
            path: "/dropdown"
        },
        {
            label:"Buttons",
            path: "/button"
        },
    ]

    const sidebarArray = list.map((link)=>{
        return <Link className="text-blue-600 my-3" key={link.path} to={link.path}>{link.label}</Link>
    });

    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {sidebarArray}
        </div>
    );
}

export default Sidebar;