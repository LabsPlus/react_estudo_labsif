import ContenedorAmigos from "./components/ContenedorAmigos/ContenedorAmigos";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Contador from "./components/States/Contador";
import ThemeMode from "./components/States/ThemeMode";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContenedorAmigos />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <hr />
      <Contador />
      <ThemeMode />
      <Form />
    </div>
  );
}

export default App;
