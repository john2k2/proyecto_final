import "./CartWidget.css";
import React from "react";
import { useItemContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalProductsCart } = useItemContext();
  return (
    <div className="carrito">
      <Link className="carrito-2" to="/cart">
        <span class="material-symbols-outlined">shopping_cart</span>
        <span>{totalProductsCart()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
