import React from "react";
import "./itemList.css";
import Item from "../item/Item";
import { Link } from "react-router-dom";
//components
import ItemCount from "../ItemCount/itemCount";

const ItemList = ({ prod }) => {
  return prod.map((producto) => (
    <div key={producto.id}>
      <Link className="link" to={`/detail/${producto.id}`}>
        <Item prod={producto} />
      </Link>
      <div>
        <ItemCount />
      </div>
    </div>
  ));
};

export default ItemList;
