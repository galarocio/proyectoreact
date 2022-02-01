import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./ItemCount.css";

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(0);

  const incrementarContador = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrementarContador = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="buttonGroup">
      <ButtonGroup variant="contained">
        <button className="button-30" onClick={incrementarContador}>
          +
        </button>
        <p className="pCounter">{counter}</p>
        <button className="button-30" onClick={decrementarContador}>
          -
        </button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
