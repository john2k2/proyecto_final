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

  useEffect(() => {
    const itemApi = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setCart(data);
    };
    itemApi();
  }, []);

  return (
    <context.Provider value={{ cart, count }}>{children}</context.Provider>
  );
};

export default Context;
