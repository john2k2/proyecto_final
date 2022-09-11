import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ onAdd }) => {
  let initial = 1;
  let stock = 5;

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

  const handleAdd = () => {
    if (count <= stock) {
      alert("Agregaste " + count + " productos al carrito");
    }
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
          <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
