import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../item/Item";

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
      {item.map((prod) => {
        console.log(prod);
        return (
          <div>
            <Item prod={prod} />
            
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
