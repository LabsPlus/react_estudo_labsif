import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CounterContextProvider } from "./context/CounterContex.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
