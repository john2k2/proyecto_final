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

  const { addItem, removeItem, clear, isInCart } = useItemContext();

  return (
    <div>
      <Card className="container" sx={{ maxWidth: 445 }}>
        <CardActionArea className="card">
          <CardMedia
            component="img"
            image={item.img}
            height="140"
            alt="green iguana"
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
      <div className="container-count">
        {confirmar ? (
          <Link to="/Cart">
            <button>Finalizar Compra</button>{" "}
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={addItem} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
