import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar_item">
      <img height={50} width={50} src={Logo} alt="Logo" />
      <div>Weather Forecaster</div>
    </div>
  );
};

export default Navbar;
