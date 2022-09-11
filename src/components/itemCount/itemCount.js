import React, { useState } from "react";
import "./itemCount.css";
import { TextField } from "@mui/material";

const ItemCount = (onAdd) => {
  let stock = 5;
  let initial = 1;

  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
    if (count === stock) {
      alert("No hay mas stock");
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onChangeValue = (e) => {
    console.log(e.count.value);
  };

  const agregarAlCarrito = () => {
    onAdd(count);
  };

  return (
    <div className="container1">
      <h2>{count} </h2>
      <div className="container2">
        <div className="count-btn">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="count-carrito">
          <button onClick={agregarAlCarrito} onChangeCapture={onChangeValue}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
