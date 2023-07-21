import React from "react";
import { Link } from "react-router-dom";

import littlelemon_logo from "../../assets/littlelemon_logo.png";
import "./Nav.styles.css";

const Nav = () => {
  return (
    <nav className="littlelemon-nav">
      <Link to="/">
        <img src={littlelemon_logo} alt="logo from little lemon" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/Booking">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
        <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
