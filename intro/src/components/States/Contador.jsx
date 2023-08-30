import React from "react";
import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(5);

  const aumentarContador = () => {
    setCount((valorAnterior) => valorAnterior + 1);
  };

  const decrementarContador = () => {
    setCount((valorAnterior) => valorAnterior - 1);
  };

  return (
    <div>
      <h1>O nosso contador es {count}</h1>
      <button onClick={aumentarContador}>Aumentar contador</button>
      <button onClick={decrementarContador}>Decrementar contador</button>
    </div>
  );
};

export default Contador;
