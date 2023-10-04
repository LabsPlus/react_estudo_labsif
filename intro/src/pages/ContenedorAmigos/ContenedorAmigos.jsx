import MostrarLista from "../../components/MostrarLista/MostrarLista";
import Contador from "../../components/States/Contador";
import ThemeMode from "../../components/States/ThemeMode";
import styles from "./ContenedorAmigos.module.css";

// context
import { CounterContext } from "../../context/CounterContex";
import { useContext } from "react";
import ChangeCounter from "../../components/ChangeCounter";

//redux
import { useSelector, useDispatch } from "react-redux";
import { aumetar } from "../../redux/actions";

const ContenedorAmigos = () => {
  const { counter } = useContext(CounterContext);

  let nome = "Christopher";
  let listaAmigos = ["Lucas", "Jose", "Gaston"];

  //dispatch das actions
  const dispatch = useDispatch();
  //estado global
  const counterGlobal = useSelector((state) => state.count);

  return (
    <div>
      <h1 className={styles.title}>Oi o meu nome es {nome}</h1>
      <MostrarLista listaAmigos={listaAmigos} />
      <Contador />
      <ThemeMode />
      <h3>Counter do Context {counter} </h3>
      <ChangeCounter />
      <h3>Counter do Redux {counterGlobal}</h3>
      <button onClick={() => dispatch(aumetar())}>Aumetar count redux</button>
    </div>
  );
};

export default ContenedorAmigos;
