import React, { useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ setPurchase, name, stock }) => {
  const [initial, setInitial] = useState(0);

  const onAdd = () => {
    return initial < 5 ? setInitial(initial + 1) : null;
  };

  const onRemove = () => {
    return initial > 0 ? setInitial(initial - 1) : null;
  };

  initial > 0 ? (setPurchase = false) : (setPurchase = true);

  if (setPurchase) {
    return (
      <div className="container1">
        <h2>{initial} </h2>
        <div className="container2">
          <div className="count-btn">
            <button onClick={onRemove}>-</button>
            <button onClick={onAdd}>+</button>
          </div>
          <div className="count-carrito">
            <Link to="/cart">
              <button>Agregar al carrito</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemCount;
