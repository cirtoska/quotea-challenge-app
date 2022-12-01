import React from "react";
import logo from "../../assets/images/quotea-logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Quotea logo" className="logo" />
      <NavLink to="/quotes">Quotes</NavLink>
      <NavLink to="/quotes">Random Quote</NavLink>
    </header>
  );
};

export default Header;
