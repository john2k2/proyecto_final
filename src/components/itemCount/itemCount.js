import React, { useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../context/context";

const ItemCount = ({ stock }) => {
  const { count, addItem } = useItemContext();

  const [initial, setInitial] = useState(0);

  const add = () => {
    if (initial < stock) {
      setInitial(initial + 1);
    } else {
      alert("No hay mas stock");
    }
  };

  const remove = () => {
    initial > 0 && setInitial(initial - 1);
  };

  const onAdd = () => {
    addItem(count + initial);
  };

  return (
    <div className="container1">
      <h2>{initial} </h2>
      <div className="container2">
        <div className="count-btn">
          <button onClick={remove}>-</button>
          <button onClick={add}>+</button>
        </div>
        <div className="count-carrito">
          <Link to="/Cart">
            <button>Finalizar Compra</button>
          </Link>
          <button onClick={onAdd}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
