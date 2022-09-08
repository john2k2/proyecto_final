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
    <Card className="card" sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prod.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prod.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
