import React, { useState } from "react";
import { AiFillHome, AiFillPlayCircle, AiFillSetting, AiOutlineMenu,AiFillStar} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Side = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const menuItem = [
        // {
        //     path: "/",
        //     name: "",
        //     icon: < size={23} />,
        // },
        {
            path: "/home",
            name: "Home",
            icon: <AiFillHome size={23} />,
        },
        {
            path: "/play",
            name: "Play",
            icon: <AiFillPlayCircle size={23} />,
        },
        {
            path: "/score",
            name: "Score",
            icon: <AiFillStar size={23} />,
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <AiFillSetting size={23} />,
        },
    ];

    return (
        <div className={`fixed top-0 left-0 h-screen ${isOpen ? "w-36" : "w-16"} 
              flex flex-col bg-gray 900 text-white shadow-lg  bg-slate-950
              transition-width duration-300`}
        >
            <div className="container">
                <div className="sidebar">
                    <div className="top_section">
                        <div className="icons-container w-16">
                            <div className="bar-icon group mt-4" onClick={toggle}>
                                <AiOutlineMenu className="icon w-16" />
                                <span className="sidebar-tooltip group-hover:opacity-100">Menu</span>
                            </div>
                            {menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                    <div className="bar-icon group mt-4">
                                    <div className="icon-wrapper">{item.icon}</div>
                                        <span className="sidebar-tooltip group-hover:opacity-100">{item.name}</span>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </div>




    );
};

export default Side;
