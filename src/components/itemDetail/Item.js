import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./item.css";

const Item = ({ prod }) => {
  return (
    <div className="container-card">
      <Card className="card-1" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={prod.img} alt={prod.title} />
          <CardContent>
            <Typography component="div">
              <h2>{prod.title}</h2>
              <p>${prod.price}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item;
