import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./item.css";
//components

const Item = ({ prod }) => {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={prod.image}
          height="340"
          alt={prod.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>{prod.title}</h2>
            <p>{prod.category}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
