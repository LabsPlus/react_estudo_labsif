# Consumo de dados asyncronos

Esta é uma pequena aplicação em React que utiliza o hook `useEffect` para fazer uma requisição a uma API e exibir uma lista de usuários.

## Arquivos Principais

- `Users.js`: Este arquivo contém o componente principal da aplicação. Ele utiliza os hooks `useState` e `useEffect` para gerenciar o estado dos usuários e fazer a requisição para a API.

## Uso do Hook `useEffect`

O hook `useEffect` é usado para executar código em componentes funcionais do React após terem sido renderizados. No caso desta aplicação, é utilizado para fazer uma requisição à API quando o componente é montado.

```javascript
useEffect(() => {
  const fetchData = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };
  fetchData();
}, []);
```

## Consumindo APIs no React

Para consumir uma API no React, você pode usar bibliotecas como o Axios, a Fetch API ou qualquer outra ferramenta de sua escolha. Neste exemplo, utilizamos o Axios, que é uma biblioteca popular para fazer requisições HTTP.

## Ciclo de Vida do Componente e `useEffect`

No React, os componentes funcionais têm um ciclo de vida que pode ser gerenciado usando o hook `useEffect`. Ele nos permite executar código em diferentes fases:

- **Montagem:** O código dentro do `useEffect` é executado após o componente ter sido montado no DOM.

- **Atualização:** Se o estado do componente mudar ou se ele receber novas props, o `useEffect` pode ser configurado para executar novamente.

- **Desmontagem:** Se precisar realizar alguma limpeza quando o componente for desmontado, você pode retornar uma função de limpeza dentro do `useEffect`.

## Importante

- `useEffect` pode ser usado múltiplas vezes em um componente para gerenciar diferentes efeitos.

- Se não for fornecida uma lista de dependências como segundo argumento, o efeito será executado em cada renderização.

- Se o segundo argumento for uma lista vazia (`[]`), o efeito será executado apenas no momento da montagem e desmontagem do componente.

---

Sintaxis:

```jsx
useEffect(() => {
  // Código para realizar efeitos secundários
}, [dependências]);
```

Onde:

- `() => {...}` é a função que contém o código do efeito secundário.
- `[dependências]` é uma matriz opcional que especifica as dependências do efeito. Se alguma dessas dependências mudar, o efeito será executado novamente. Se não houver dependências, o efeito será executado a cada renderização.

**Exemplo**:

Suponha que queremos carregar um conjunto de dados de uma API quando nosso componente é montado. Poderíamos escrever um componente como este:

```jsx
import React, { useState, useEffect } from "react";

function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Esta função será executada quando o componente for montado
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => setUsuarios(dados))
      .catch((erro) => console.error("Erro ao obter usuários:", erro));
  }, []); // A matriz vazia indica que este efeito será executado apenas quando o componente for montado

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeUsuarios;
```

Neste exemplo, o `useEffect` é usado para fazer a requisição à API quando o componente é montado. A função `fetch` é utilizada para obter os dados da API e, em seguida, os dados são definidos no estado usando `setUsuarios`.

**Considerações importantes**:

1. Se você não fornecer uma matriz de dependências como segundo argumento, o efeito será executado a cada renderização do componente.

2. Se você fornecer uma matriz de dependências, o efeito será executado apenas se alguma dessas dependências tiver mudado desde a última execução do efeito.

3. Você pode retornar uma função de limpeza na função do efeito. Essa função será executada quando o componente for desmontado ou quando as dependências mudarem.

```jsx
useEffect(() => {
  // Código para realizar efeitos secundários

  return () => {
    // Código de limpeza
  };
}, [dependências]);
```

Isso é útil para cancelar inscrições ou liberar recursos quando não forem mais necessários.
