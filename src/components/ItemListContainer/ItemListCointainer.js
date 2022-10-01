import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [prod, setProd] = useState([]);

  const { filterid } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "ropa");
    if (filterid) {
      const queryFilter = query(
        queryCollection,
        where("genero", "==", filterid)
      );
      getDocs(queryFilter).then((res) => {
        const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProd(data);
      });
    } else {
      getDocs(queryCollection).then((res) => {
        setProd(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    }
  }, [filterid]);

  return (
    <div className="container">
      <ItemList prod={prod} />
    </div>
  );
};

export default ItemListContainer;
