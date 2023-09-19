import React from "react";

// context
import { CounterContext } from "../../context/CounterContex";
import { useContext } from "react";

const About = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Eu estouy no about</h1>
      <h3>Counter do Context {counter} </h3>
    </div>
  );
};

export default About;
