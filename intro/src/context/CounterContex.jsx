import { Children, createContext, useState } from "react";

//criar context
export const CounterContext = createContext();

//prover ocontexto

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
