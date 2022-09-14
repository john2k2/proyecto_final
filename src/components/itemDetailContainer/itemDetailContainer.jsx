import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [id]);

  return (
    <div className="detail">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
