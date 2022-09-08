import React from "react";
import "./nav.css";
import './nav.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/" className="link">
        About
      </Link>
      <Link to="/" className="link">
        Contact
      </Link>
    </ul>
  );
};

export default Navbar;
