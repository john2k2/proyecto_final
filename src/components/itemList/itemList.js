import React from "react";
import "./ItemList.css";
import Item from "../ItemDetail/Item";
import { Link } from "react-router-dom";
//components

const ItemList = ({ prod }) => {
  return prod.map((producto) => (
    <div key={producto.id}>
      <Link className="link" to={`/detail/${producto.id}`}>
        <Item prod={producto} />
      </Link>
    </div>
  ));
};

export default ItemList;
