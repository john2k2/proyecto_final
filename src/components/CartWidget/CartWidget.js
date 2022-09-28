import "./CartWidget.css";
import React from "react";
import { useItemContext } from "../../context/CartContext";

const CartWidget = () => {
  const { count } = useItemContext();
  return (
    <div className="carrito">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span>{count}</span>
    </div>
  );
};

export default CartWidget;
