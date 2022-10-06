import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/About">
          <li>About</li>
        </Link>
        <Link className="link" to="/Contact">
          <li>Contact</li>
        </Link>
        <div className="carrito">
          <CartWidget />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
