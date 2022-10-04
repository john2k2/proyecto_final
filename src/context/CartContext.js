import { createContext, useState } from "react";
import { useContext } from "react";

const Context = createContext();

export const useItemContext = () => {
  const ContextData = useContext(Context);
  return ContextData;
};

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemExist = cart.find((i) => i.id === item.id);
    if (itemExist) {
      const newCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((i) => i.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const totalProductsCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPriceCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getQuantity,
        totalProductsCart,
        totalPriceCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartContext;
