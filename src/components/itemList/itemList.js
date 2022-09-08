import React from "react";
import "./itemList.css";
import Item from "../item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ prod }) => {
  return prod.map((producto) => (
    <div key={producto.id}>
      <Link to={`/Item/${producto.id}`}>
        <Item prod={producto} />
      </Link>
    </div>
  ));
};

export default ItemList;
