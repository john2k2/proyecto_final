import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const context = createContext();

export const useItemContext = () => {
  const contextData = useContext(context);
  return contextData;
};

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { item, quantity: cartItem.quantity + quantity };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.item.id === itemId);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0
    );
  };

  return (
    <context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </context.Provider>
  );
};
