import MostrarLista from "../MostrarLista/MostrarLista";
import Contador from "../States/Contador";
import ThemeMode from "../States/ThemeMode";
import styles from "./ContenedorAmigos.module.css";

const ContenedorAmigos = () => {
  let nome = "Christopher";
  let listaAmigos = ["Lucas", "Jose", "Gaston"];

  return (
    <div>
      <h1 className={styles.title}>Oi o meu nome es {nome}</h1>
      <MostrarLista listaAmigos={listaAmigos} />
      <Contador />
      <ThemeMode />
    </div>
  );
};

export default ContenedorAmigos;
