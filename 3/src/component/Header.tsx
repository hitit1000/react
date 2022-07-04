import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "logo.png"} alt="logo" />
        </div>
      </Link>
      <nav className="nav">
        <Link to="/Estimate">Estimate</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Etc">Etc</Link>
      </nav>
    </div>
  );
};

export default Header;
