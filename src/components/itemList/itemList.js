import React from "react";
import "./itemList.css";
import Item from "../item/Item";

const ItemList = ({ prod }) => {
  return prod.map((prod) => (
    <Item prod={prod} key={prod.id} />
  ));
};

export default ItemList;