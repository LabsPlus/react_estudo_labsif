# Formulários em React

Os formulários são muito úteis em qualquer aplicação web. No React, temos que lidar com esses formulários por conta própria. Por exemplo: obter os valores inseridos, como gerenciamos o estado do formulário, as validações de cada valor inserido, exibir mensagens de validação, etc. Existem diferentes métodos e bibliotecas que nos ajudam com isso, mas como não queremos depender do código de terceiros, faremos isso por nós mesmos.

## Componentes Controlados

Como sabemos, o estado no React é mutável e é mantido dentro do componente. Em um componente controlado, que renderiza o formulário, também controla o que acontece com ele. Isso significa que à medida que os valores do formulário mudam, o componente armazena esses valores em seu estado. Aqui está um pequeno exemplo:

Com Hooks:

```javascript
import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <form>
      <input type="text" name="user" value={user} onChange={handleChange} />
    </form>
  );
};

export default Form;
```

Nosso objetivo é que cada vez que os valores do nosso formulário mudem, os armazenemos em nosso estado. Isso significa que nosso formulário pode responder às mudanças feitas em cada campo de entrada. Por exemplo, adicionar validações, desabilitar um botão até que todos os campos estejam preenchidos ou validados, e impor um formato específico em cada campo de entrada.

Lidando com múltiplos campos de entrada:

Na maioria dos casos, teremos mais de uma única entrada. Para lidar com eles, podemos adicionar o atributo `name` a cada um e permitir que nossa função que lida com as mudanças decida o que fazer com base no valor de `e.target.name`:

Com Hooks:

```javascript
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    user: "",
    senha: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setInputs((estadoAnterior) => ({
      ...estadoAnterior, //(inputs)
      [name]: value, // Sintaxis ES6 para actualizar la key correspondiente
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User
        <input
          name="user"
          type="text"
          value={inputs.user}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha
        <input
          name="senha"
          type="text"
          value={inputs.senha}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
```

Validando nossos Inputs

Outra coisa que desejamos fazer em nosso componente é validar os inputs dependendo dos dados que precisam ser inseridos. Por exemplo: ao validar um endereço de e-mail, no momento de alterar nosso estado, queremos 'filtrar' o valor desse input por uma função que valide os valores inseridos. No caso de não ser válido, exibiremos uma mensagem de erro.

Assim, teríamos um Formulário Controlado, onde estamos fazendo validações para cada input e desabilitando o botão de envio até que todas as validações sejam aprovadas.

```javascript
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    user: "",
    senha: "",
  });

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const validation = (campo) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(campo)) {
      setError("O usuario debe ser um email");
      setDisabled(true);
    } else {
      setError("");
      setDisabled(false);
    }
  };

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log(error);
    if (name === "user") {
      validation(value);
    }

    setInputs((estadoAnterior) => ({
      ...estadoAnterior, //(inputs)
      [name]: value, // Sintaxis ES6 para atualizar a key correspondente
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User
        <input
          name="user"
          type="text"
          value={inputs.user}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha
        <input
          name="senha"
          type="text"
          value={inputs.senha}
          onChange={handleChange}
        />
      </label>
      <input disabled={disabled} type="submit" />
      {!error ? null : <span>{error}</span>}
    </form>
  );
};

export default Form;
```
