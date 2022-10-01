import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

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
      <CartWidget />
    </ul>
  );
};

export default Navbar;
