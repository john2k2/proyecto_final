import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../fireBase/fireBaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const q = query(collection(db, "ropa"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setItem({ id: doc.id, ...doc.data() });
        }
      });
    });
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
