import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../item/Items";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [id]);

  return (
    <div className="detail">
      <Items item={item} />
    </div>
  );
};

export default ItemDetail;
