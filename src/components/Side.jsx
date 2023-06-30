
import { VscHome, VscPlay, VscSettingsGear, VscArrowLeft, VscAccount, VscMenu } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


// const Side = () => {
//     return (
//         <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg bg-primary text-secondary">

//             <Bar icon={<VscMenu size="28" />} />
//             <Bar icon={<VscAccount size="28" />} />
//             <Bar icon={<VscHome size="28" />} />
//             <Bar icon={<VscPlay size="28" />} />
//             <Bar icon={<VscSettingsGear size="28" />} />
//             <Bar icon={<VscArrowLeft size="28" />} />
//         </div>
//     )
// }

// const Bar = ({ icon, text = 'tooltip' }) => {
//     return (
//         <div className='bar-icon group:'>
//             {icon}
//             <span className="sidebar-tooltip group-hover:">{text}
//             </span>

//         </div>
//     );
// }

const Side=({children})=>{
    const menuItem=[
        {
            path:"/",
            name:"sidebar",
            icon:<VscAccount/>
        },
        {
            path:"/home",
            name:"Home",
            icon:<VscHome/>
        },
        {
            path:"/play",
            name:"Play",
            icon:<VscPlay/>
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<VscSettingsGear/>
        },
    ]
    return(
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">Logo</h1>
                    <div className="bars">
                    <VscMenu/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>

                    ))
                }
            </div>
            <main>{children}</main>
        </div>

    )
}

export default Side;