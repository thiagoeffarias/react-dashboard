import React, { useState, useEffect } from "react";
import "./sidebar.css";
import Logo from "../../imgs/ajuda.png";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const SideBar = () => {
  const [selected, setSelected] = useState(() => {
    const storedValue = localStorage.getItem("selected-menu-item");
    return storedValue !== null ? parseInt(storedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem("selected-menu-item", selected);
  });

  const handleOnMenuItemClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="SideBar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Ment<span>o</span>r
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleOnMenuItemClick(index)}
            >
              <div className="icon">
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <div className="icon">
            <UilSignOutAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
