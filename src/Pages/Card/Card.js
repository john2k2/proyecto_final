import React from "react";
import { useItemContext } from "../../Context/CartContext";

const Card = () => {
  const { cart, setCart, addItem, isInCart, removeItem, clear } =
    useItemContext();

  return (
    <div>
      <h1>Carrito</h1>
      <div>
        {cart.map((product) => (
          <div>
            <h2>{product.item.title}</h2>
            <h3>{product.quantity}</h3>
            <button onClick={() => removeItem(product.item.id)}>X</button>
          </div>
        ))}
      </div>
      <button onClick={clear}>Vaciar Carrito</button>
    </div>
  );
};

export default Card;
