import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/ropa/hombre">Hombre</Link>
        </li>
        <li>
          <Link to="/ropa/mujer">Mujer</Link>
        </li>
        <li>
          <Link to="/ropa/unisex">Unisex</Link>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
