import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="app_container">
      <div className="navbar_container">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
