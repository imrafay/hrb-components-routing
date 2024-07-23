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
        {
            label:"Modal",
            path: "/modal"
        },
        {
            label:"Table",
            path: "/table"
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