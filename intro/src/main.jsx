import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CounterContextProvider } from "./context/CounterContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
