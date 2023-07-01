import React, { useState } from "react";
import { VscHome, VscPlay, VscSettingsGear, VscMenu, VscGraphLine } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Side = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const menuItem = [
        // {
        //     path: "/",
        //     name: "sidebar",
        //     icon: <VscAccount size={23} />,
        // },
        {
            path: "/home",
            name: "Home",
            icon: <VscHome size={23} />,
        },
        {
            path: "/play",
            name: "Play",
            icon: <VscPlay size={23} />,
        },
        {
            path: "/score",
            name: "Score",
            icon: <VscGraphLine size={23} />,
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <VscSettingsGear size={23} />,
        },
    ];

    return (
        <div className={`fixed top-0 left-0 h-screen ${isOpen ? "w-36" : "w-16"} 
              flex flex-col bg-gray-900 text-white shadow-lg bg-primary text-secondary 
              transition-width duration-300`}
        >
            <div className="container">
                <div className="sidebar">
                    <div className="top_section">
                        <div className="icons-container w-16">
                            <div className="bar-icon group mt-4" onClick={toggle}>
                                <VscMenu className="icon w-16" />
                                <span className="sidebar-tooltip group-hover:opacity-100">Menu</span>
                            </div>
                            {menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                    <div className="bar-icon group mt-4">
                                        {item.icon}
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
