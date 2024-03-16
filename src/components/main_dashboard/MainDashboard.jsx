import React from "react";
import "./MainDashboard.css";
import Cards from "../cards/Cards";

const MainDashboard = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default MainDashboard;
