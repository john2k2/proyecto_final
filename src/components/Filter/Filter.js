import React from "react";
import { Link } from "react-router-dom";
import "./Filter.css";
const Filter = () => {
  return (
    <div className="container">
      <ul className="lista-completa">
        <li>
          <Link className="Link" to="/ropa/hombre">
            Hombre
          </Link>
        </li>
        <li>
          <Link className="Link" to="/ropa/mujer">
            Mujer
          </Link>
        </li>
        <li>
          <Link className="Link" to="/ropa/unisex">
            Unisex
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Filter;
