import React from "react";
import { useItemContext } from "../../Context/CartContext";

const Card = () => {
  const { cart, removeItem, clear, totalProductsCart, totalPriceCart } =
    useItemContext();

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1 className="text-center">No hay productos en el carrito</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Carrito de compras</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger bg-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">
            Total de productos: {totalProductsCart()}
          </h3>
          <h3 className="text-center">Total a pagar: ${totalPriceCart()}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-danger bg-danger" onClick={() => clear()}>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
