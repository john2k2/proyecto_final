import "./CartWidget.css";
import React from "react";

const CartWidget = () => {
  let monto = 0;
  return (
    <div className="carrito">
      <span class="material-symbols-outlined">shopping_cart</span>
      <p> {monto} </p>
    </div>
  );
};

export default CartWidget;
