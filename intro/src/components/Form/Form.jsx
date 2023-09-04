import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    user: "",
    senha: "",
  });

  const handleChange = (evento) => {
    const { value, name } = evento.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        User
        <input
          onChange={handleChange}
          name="user"
          value={inputs.user}
          type="text"
        />
      </label>
      <label>
        Senha
        <input
          onChange={handleChange}
          value={inputs.senha}
          name="senha"
          type="password"
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
