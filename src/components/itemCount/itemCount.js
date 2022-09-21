import React, { useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../context/context";

const ItemCount = ({ name, stock }) => {
  const { count } = useItemContext();

  const [initial, setInitial] = useState(0);
  const [adding, setAdding] = useState(true);

  const add = () => {
    if (initial < stock) {
      setInitial(initial + 1);
    } else {
      alert("No hay mas stock");
    }
  };

  const remove = () => {
    if (initial > 0) {
      setInitial(initial - 1);
    } else {
      alert("No hay mas stock");
    }
  };

  const onAdd = () => {
    alert("Agregaste " + initial + " " + "productos" + " al carrito");
    setAdding(false);
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
