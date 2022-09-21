import React from "react";
import { useItemContext } from "../../context/context";

const Card = () => {
  const  cart  = useItemContext();
  console.log(cart);

  return (
    <div>
      <h1>Card</h1>
    </div>
  );
};

export default Card;
