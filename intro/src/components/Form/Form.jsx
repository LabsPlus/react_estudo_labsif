import styles from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    user: "",
    senha: "",
  });
  const [errors, setErrors] = useState({
    user: "",
    senha: "",
  });

  const validation = ({ senha, user }) => {
    const errors = {};
    //Regex
    if (senha.length < 6) errors.senha = "A senha e muito corta";
    if (senha.length > 10) errors.senha = "A senha e muito longa";

    return errors;
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    setErrors(
      validation({
        ...inputs,
        [name]: value,
      })
    );
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!Object.values(errors).length) {
      console.log(inputs);
      alert("login success");
      navigate("/");
    } else {
      alert("por favor verifique os campos");
    }
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
      {errors.senha ? <span>{errors.senha}</span> : ""}
      <input type="submit" />
    </form>
  );
};

export default Form;
