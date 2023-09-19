import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h3>ChangeCounter</h3>
      <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
    </div>
  );
};

export default ChangeCounter;
