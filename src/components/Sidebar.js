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
        return <Link key={link.path} to={link.path}>{link.label}</Link>
    });

    return(
        <div>
            {sidebarArray}
        </div>
    );
}

export default Sidebar;