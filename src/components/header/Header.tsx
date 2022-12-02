import React from "react";
import logo from "../../assets/images/quotea-logo.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Quotea logo" className="logo" />
      </Link>
      <Link to="/quotes" className="nav-btn">
        Quotes
      </Link>
      <Link to="/random-quotes" className="nav-btn">
        Random Quote
      </Link>
    </header>
  );
};

export default Header;
