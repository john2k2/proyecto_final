import React, { useState } from "react";
import "./itemCount.css";


const ItemCount = ({ stock, initial, onAdd }) => {
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

  const agregarAlCarrito = () => {
    onAdd(count);
  };

  return (
    <div className="Count">
      <h2>{count} </h2>
      <div className="Count-btn">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="Count-carrito">
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
};




export default ItemCount;
