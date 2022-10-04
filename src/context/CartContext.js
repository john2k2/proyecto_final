import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const Context = createContext();

export const useItemContext = () => {
  const ContextData = useContext(Context);
  return ContextData;
};

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart([...cart, { item, quantity }]);

    console.log(cart);
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

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartContext;
