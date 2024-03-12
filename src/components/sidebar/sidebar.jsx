import React from "react";
import "./sidebar.css";
import Logo from "../../imgs/mentoria.png";

const sidebar = () => {
  return (
    <div className="SideBar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Ment<span>o</span>r
        </span>
      </div>
    </div>
  );
};

export default sidebar;
