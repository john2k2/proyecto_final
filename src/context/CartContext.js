import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export const context = createContext();

export const useItemContext = () => {
  const contextData = useContext(context);
  return contextData;
};

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  let count = 0;

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };


  return (
    <context.Provider
      value={{
        cart,
        count,
        clearCart,
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
