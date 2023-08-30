import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./ThemeMode.module.css";

const ThemeMode = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={styles[theme]}>
      <h1>O theme es {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "night" : "light")}>
        Trocar theme
      </button>
    </div>
  );
};

export default ThemeMode;
