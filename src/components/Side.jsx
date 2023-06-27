
import {VscHome, VscPlay, VscSettingsGear,VscArrowLeft,VscAccount, VscMenu} from "react-icons/vsc";


const Side=()=>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg bg-primary text-secondary">

            <Bar icon={<VscMenu size="28"/>}/>
            <Bar icon={<VscAccount size="28"/>}/>
            <Bar icon={<VscHome size="28"/>}/>
            <Bar icon={<VscPlay size="28"/>}/>
            <Bar icon={<VscSettingsGear size="28"/>}/>
            <Bar icon={<VscArrowLeft size="28"/>}/>
        </div>
    )
}

const Bar=({icon, text='tooltip'})=>{
    return(
    <div className='bar-icon group:'>
        {icon}
        <span className="sidebar-tooltip group-hover:">{text}
        </span>

    </div>
    );
}

export default Side;