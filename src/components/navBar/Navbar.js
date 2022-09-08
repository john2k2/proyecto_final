import React from "react";
import "./nav.css";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/About">
        <li>About</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
};

export default Navbar;
