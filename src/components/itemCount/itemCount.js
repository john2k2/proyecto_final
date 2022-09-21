import React, { useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../context/context";

const ItemCount = ({ name, stock }) => {
  const { count } = useItemContext();

  const [initial, setInitial] = useState(0);
  let contador = 0;

  const onAdd = (e) => {
    if (count < stock) {
      setInitial(initial + 1);
      console.log(initial);
    } else {
      alert("No hay mas stock");
    }
  };
  const onRemove = () => {
    return initial > 0 ? setInitial(initial - 1) : null;
  };

  const onChangeValue = (e) => {
    setInitial(e.target.value + count);
  };

  const onPurchase = (e) => {
    e.preventDefault();
    if (initial > 0) {
      contador = initial + count;
    }
  };

  return (
    <div className="container1">
      <h2>{initial} </h2>
      <div className="container2">
        <div className="count-btn">
          <button onClick={onRemove}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
        <div className="count-carrito">
          <Link to="/Cart">
            <button>Finalizar Compra</button>
          </Link>
          <button onClick={onPurchase}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
