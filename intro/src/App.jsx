import ContenedorAmigos from "./components/ContenedorAmigos/ContenedorAmigos";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Form from "./components/Form/Form";
import Users from "./pages/Users/Users";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContenedorAmigos />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
