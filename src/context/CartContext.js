import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const context = createContext();

export const useItemContext = () => {
  const contextData = useContext(context);
  return contextData;
};

export const Context = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addItem = (item, newQuantity) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id === item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.item.id === id);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <context.Provider
      value={{
        cart,
        count,
        clear,
        isInCart,
        removeItem,
        addItem,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
