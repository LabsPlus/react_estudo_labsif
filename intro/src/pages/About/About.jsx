import React, { useEffect } from "react";

// context
import { CounterContext } from "../../context/CounterContex";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aumetar } from "../../redux/actions";

const About = () => {
  const counterGlobal = useSelector((state) => state.count);

  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Eu estouy no about</h1>
      <h3>Counter do Context {counter} </h3>
      <h4>Counter Global {counterGlobal}</h4>
    </div>
  );
};

export default About;
