**Context API em React: Um Guia de Estudo com Exemplo de Contador**

A Context API em React é uma ferramenta poderosa para compartilhar e gerenciar o estado em uma aplicação de forma eficiente. Vamos explorar os principais conceitos e criar um exemplo prático de um contador utilizando o Context API.

### Conceitos Fundamentais:

- **Múltiplos Contextos:** Uma aplicação pode ter vários contextos, permitindo o compartilhamento de estados específicos entre diferentes partes da aplicação.

- **Compartilhamento de Estado:** O Context API facilita o compartilhamento de estados entre componentes, tornando a comunicação entre eles mais eficiente.

- **Dados Globais:** Quando precisamos de dados globais acessíveis em diversos componentes, o Context API se torna uma escolha ideal.

- **Encapsulamento de Componentes:** O contexto deve envolver os componentes que irão consumir os seus valores. Geralmente, isso é feito no arquivo principal da aplicação (como `App.js` ou `index.js`).

- **Organização em Pastas:** Os contextos costumam ser organizados em uma pasta chamada `context` para manter a estrutura da aplicação organizada.

### Passos para Implementar o Contexto:

1. **Criar o Contexto:**

```jsx
// CounterContext.js
import React, { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementar = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, incrementar, decrementar }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
```

2. **Utilizando o Contexto:**

```jsx
// App.js
import React from "react";
import CounterContext, { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

const App = () => {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Contador com Context API</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};

export default App;
```

### Componentes do Contador:

3. **Componente de Visualização:**

```jsx
// CounterDisplay.js
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return <div>Contador: {count}</div>;
};

export default CounterDisplay;
```

4. **Componente de Controle:**

```jsx
// CounterControls.js
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterControls = () => {
  const { incrementar, decrementar } = useContext(CounterContext);

  return (
    <div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default CounterControls;
```

Este exemplo demonstra como criar um contexto para um contador e como utilizá-lo em diferentes componentes da aplicação. Os componentes `CounterDisplay` e `CounterControls` podem acessar o estado e as funções através do contexto fornecido pelo `CounterProvider`.
