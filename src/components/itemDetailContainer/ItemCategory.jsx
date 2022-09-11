import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../item/Items";

const ItemDetail = () => {
  const [categoryid, setItem] = useState({});

  let { category } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [category]);

  return (
    <div className="detail">
      <Items categoryid={categoryid} />
    </div>
  );
};

export default ItemDetail;
