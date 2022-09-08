import "./itemListContainer.css";
import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [producto, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div className="container">
      <ItemList prod={producto} />
    </div>
  );
};

export default ItemListContainer;
