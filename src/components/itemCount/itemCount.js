import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../Context/CartContext";

const ItemCount = ({ stock, initial }) => {
  const { item, quantity, addItem, removeItem, clear, isInCart, cart } =
    useItemContext();
  console.log(cart);

  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAddToCart = () => {
    addItem(item, quantity);
  };

  return (
    <div className="container1">
      <h2>{count} </h2>
      <div className="container2">
        <div className="count-btn">
          <button onClick={onRemove}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
        <div className="count-carrito">
          <Link to="/Cart">
            <button>Finalizar Compra</button>
          </Link>
          <button onClick={onAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
