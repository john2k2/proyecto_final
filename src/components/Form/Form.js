import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import "./Form.css";
import ItemListContainer from "../ItemListContainer/ItemListCointainer";

const Form = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userInputs = input.toLowerCase().replace(/\s/g, "");

    if (userInputs) {
      axios.get(`https://api.github.com/users/${userInputs}`).then((res) => {
        setUser(res.data);
      });
    }
    setInput("");
  };
  return (
    <div className="container_form">
      <form onSubmit={onSubmit} className="form">
        <TextField
          className="TextField"
          placeholder="Buscar Usuario"
          variant="outlined"
          onChange={onChangeValue}
          value={input}
        />
        <button className="btn">Buscar</button>
      </form>
      {user.id ? (
        <ItemListContainer data={user} />
      ) : (
        <p>No Hiciste ninguna Busqeda!!</p>
      )}
    </div>
  );
};

export default Form;
