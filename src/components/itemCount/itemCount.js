import React, { useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../context/CartContext";

const ItemCount = ({ stock, onAdd, initial }) => {
  const { count, addItem } = useItemContext();

  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      console.log(cantidad);
    } else {
      alert("No hay mas stock");
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      console.log(cantidad);
    } else {
      setCantidad(0);
    }
  };

  const onAddCart = () => {
    onAdd(cantidad);
    addItem(count, cantidad);
  };

  return (
    <div className="container1">
      <h2>{cantidad} </h2>
      <div className="container2">
        <div className="count-btn">
          <button onClick={restar}>-</button>
          <button onClick={sumar}>+</button>
        </div>
        <div className="count-carrito">
          <Link to="/Cart">
            <button>Finalizar Compra</button>
          </Link>
          <button onClick={onAddCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
