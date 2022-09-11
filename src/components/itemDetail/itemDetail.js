import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./itemDetail.css";
//components

const Item = ({ item }) => {
  return (
    <Card className="container" sx={{ maxWidth: 445 }}>
      <CardActionArea className="card">
        <CardMedia
          component="img"
          image={item.image}
          height="140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="detalle">
              <h2>${item.price}</h2>
              <p>{item.description}</p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
