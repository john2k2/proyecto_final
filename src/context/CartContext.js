import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const context = createContext();

export const useItemContext = () => {
  const contextData = useContext(context);
  return contextData;
};

export const Context = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);}

  const addItem = (item, quantity) => {
    const itemInCart = items.find((i) => i.item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += quantity;
      setItems([...items]);
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = items.filter((cartItem) => cartItem.item.id !== id);
    setItems(newCart);
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <context.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </context.Provider>
  );
};

export default Context;
