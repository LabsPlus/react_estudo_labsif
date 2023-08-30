# Estados e Ciclos de Vida em Componentes Funcionais

## Estados em Componentes Funcionais

### O que é um estado e por que é importante?

No React, o estado é uma forma de armazenar e gerenciar dados que podem mudar em um componente ao longo do tempo. É fundamental para construir componentes dinâmicos e interativos, pois permite que a interface do usuário seja atualizada em resposta a eventos ou mudanças nos dados.

### Declaração de estados usando o hook `useState`

Em componentes funcionais, você pode declarar estados utilizando o hook `useState`. Este hook fornece uma variável de estado e uma função para atualizá-la.

```jsx
import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

Neste exemplo, a função `useState` é utilizada para criar o estado `count` com um valor inicial de 0. A função `setCount` permite atualizar o valor do estado quando o botão é clicado.

### Atualização de estados

Você pode atualizar um estado utilizando a função fornecida pelo hook `useState`. A atualização pode ser baseada no valor anterior do estado.

```jsx
function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount((contadorAnterior) => contadorAnterior + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

Neste exemplo, a função `setCount` é chamada com uma função que recebe o valor anterior do estado como parâmetro (`contadorAnterior`) e retorna o novo valor a ser definido. Isso garante que a atualização do estado seja segura e baseada no valor atual.

### Uso de múltiplos estados

Um componente pode ter vários estados independentes.

```jsx
function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}
```

Neste exemplo, o componente `Formulario` tem dois estados independentes: `nome` e `email`, cada um com sua própria função `set` para atualização. Isso permite que diferentes partes do formulário tenham seus próprios estados e atualizações.

### Passar estados como props para componentes filhos

Os estados podem ser passados como props para componentes filhos, permitindo que os filhos acessem e usem esses estados.

```jsx
function ComponentePai() {
  const [mensagem, setMensagem] = useState("Olá do Pai");

  return (
    <div>
      <ComponenteFilho mensagem={mensagem} />
    </div>
  );
}

function ComponenteFilho(props) {
  return <p>{props.mensagem}</p>;
}
```

Neste exemplo, o componente `ComponentePai` possui um estado chamado `mensagem`, que é passado como prop para o componente `ComponenteFilho`. O componente filho então pode usar essa propriedade para exibir a mensagem recebida do pai.

## Ciclos de Vida em Componentes Funcionais

### O ciclo de vida do `useEffect`

O hook `useEffect` permite realizar efeitos colaterais em componentes funcionais, como fazer chamadas a APIs, se inscrever em eventos, entre outros.

```jsx
import React, { useState, useEffect } from "react";

function BuscadorDeDados() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      const resposta = await fetch("https://api.exemplo.com/dados");
      const dadosJson = await resposta.json();
      setDados(dadosJson);
    };
    buscarDados();
  }, []);

  return (
    <div>
      {dados.map((item) => (
        <p key={item.id}>{item.nome}</p>
      ))}
    </div>
  );
}

export default BuscadorDeDados;
```

Neste exemplo, o componente `BuscadorDeDados` utiliza o `useEffect` para fazer uma chamada a uma API e buscar dados. A chamada à API ocorre assim que o componente é montado (devido ao array de dependências vazio `[]`). Os dados retornados são armazenados no estado `dados` e exibidos na interface do usuário.

### Controlando a montagem, atualização e desmontagem de componentes

O efeito do `useEffect` pode ser controlado para ser executado apenas em momentos específicos do ciclo de vida do componente.

```jsx
useEffect(() => {
  // Executa após a primeira renderização (montagem)
}, []);

useEffect(() => {
  // Executa quando o componente é montado e sempre que count muda (atualização)
}, [count]);

useEffect(() => {
  return () => {
    // Executa antes do componente ser desmontado
  };
}, []);
```

Este material de estudo fornece informações e exemplos básicos sobre os conceitos de estados e ciclos de vida em componentes funcionais do React. Utilize esses exemplos como ponto de partida e continue explorando a documentação oficial do React e outros recursos para aprofundar esses conceitos e aprimorar suas habilidades no desenvolvimento com React.
