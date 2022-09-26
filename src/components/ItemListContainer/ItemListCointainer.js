import "./itemListContainer.css";
import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../fireBase/fireBaseConfig";

const ItemListContainer = () => {
  const q = query(collection(db, "ropa"));
  const [prod, setProd] = useState([]);

  useEffect(() => {
    getDocs(q).then((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProd(docs);
    });
  }, []);

  return (
    <div className="container">
      <ItemList prod={prod} />
    </div>
  );
};

export default ItemListContainer;
