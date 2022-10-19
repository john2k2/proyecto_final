import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../Context/CartContext";

//components

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [confirmar, setConfirmar] = React.useState(false);

  const { addItem } = useItemContext();

  const onCart = (count) => {
    addItem(item, count);
  };

  return (
    <div>
      <Card className="container" sx={{ maxWidth: 445 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.img}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div className="detalle">
                <h2>${item.price}</h2>
                <p>{item.title}</p>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="btn-count">
        <ItemCount 
          stock={item.stock}
          initial={1}
          onCart={onCart}
          setPurchase={setConfirmar}
        />
      </div>
      {confirmar && (
        <Link to="/Cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
