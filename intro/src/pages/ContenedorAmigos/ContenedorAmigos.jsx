import MostrarLista from "../../components/MostrarLista/MostrarLista";
import Contador from "../../components/States/Contador";
import ThemeMode from "../../components/States/ThemeMode";
import styles from "./ContenedorAmigos.module.css";

// context
import { CounterContext } from "../../context/CounterContex";
import { useContext } from "react";
import ChangeCounter from "../../components/ChangeCounter";

const ContenedorAmigos = () => {
  const { counter } = useContext(CounterContext);

  let nome = "Christopher";
  let listaAmigos = ["Lucas", "Jose", "Gaston"];

  return (
    <div>
      <h1 className={styles.title}>Oi o meu nome es {nome}</h1>
      <MostrarLista listaAmigos={listaAmigos} />
      <Contador />
      <ThemeMode />
      <h3>Counter do Context {counter} </h3>
      <ChangeCounter />
    </div>
  );
};

export default ContenedorAmigos;
