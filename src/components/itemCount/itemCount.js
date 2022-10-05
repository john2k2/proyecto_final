import React, { useEffect, useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onCart, setPurchase }) => {
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

  useEffect(() => {
    if (count > stock) {
      setCount(stock);
    }
  }, [count, stock]);

  return (
    <div className="container-count">
      <div className="count">
        <div className="btn-count">
          <button onClick={onRemove}>-</button>
          <p>{count}</p>
          <button onClick={onAdd}>+</button>
        </div>
        <div className="btn">
          <button onClick={() => onCart(count)}>Agregar al carrito</button>

          {setPurchase && (
            <Link to="/Cart">
              <button>Finalizar Compra</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemCount;
