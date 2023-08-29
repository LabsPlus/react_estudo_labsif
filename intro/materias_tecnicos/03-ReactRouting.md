# Roteamento no Front-End

Vamos ver que muitos projetos em React são construídos como **SPA** (Single Page Applications), ou seja, exibem alguns **Containers** ou outros elementos sem recarregar a página, conforme o usuário navega. Como temos tudo encapsulado em **Componentes**, pensar em nossa aplicação como uma **SPA** pode não ser muito complexo. No entanto, o que pode ser mais complexo é o roteamento interno no front-end, ou seja, o trabalho de **mapear** cada link para algum **Componente**. Felizmente, não estamos sozinhos, existem várias bibliotecas no **npm** prontas para nos ajudar com isso. Nós vamos usar uma chamada **react-router**.

## React Router

De acordo com a descrição em seu [repositório](https://github.com/ReactTraining/react-router), o **react-router** serve para manter sua interface de usuário (_UI_) sincronizada com a URL de forma declarativa.

Nós usaremos o **react-router-dom**, que contém os componentes básicos do `react-router`, além de componentes extras que iremos utilizar. Basicamente, o que o `react-router-dom` nos fornece são uma série de **Componentes**, os quais receberão determinadas **props** que irão modificar o comportamento deles. A ideia, então, será ter um **Componente** principal que será carregado em nossa página (a única que teremos), e esse componente se encarregará de chamar nossos **Componentes** que desejamos mostrar conforme o usuário navega.
Por exemplo:

```javascript
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

### Começando com react-router-dom

Como sempre, vamos começar instalando o `react-router-dom` em nosso projeto com o comando `$ npm install react-router-dom`.

Em seguida, vamos **importar** os **Componentes** de que precisamos:

```javascript
// páginas
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

// react
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
```

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // importe esta dependência para poder envolver o App e usar o react-router-dom

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Primeiro, vemos que estamos envolvendo tudo em um componente chamado `BrowserRouter`.
Dentro do `BrowserRouter`, estamos adicionando nossas rotas. Neste caso, estamos adicionando duas rotas usando `<Route>`. A este componente, devemos passar duas propriedades:

- _path_: É o caminho da **URL** que ativará esta rota.
- _element_: É o componente que será carregado quando acessarmos o caminho definido no _path_.
- _exact_: Adicionamos essa palavra-chave para que corresponda exatamente ao caminho que passamos. Esse parâmetro entra em jogo quando temos caminhos aninhados.

## Links

Muito bem, agora precisamos criar links para navegar entre rotas. Poderíamos usar a tag `<a>` e no atributo `href` adicionar a `/`, mas por duas razões simples, não vamos usar esse método e, em vez disso, usaremos um novo Componente do `react-router-dom` chamado `Link`. A primeira razão é que, se por algum motivo pararmos de usar o `BrowserRouter`, provavelmente (não é garantido) nossos links deixariam de funcionar. A segunda razão é que os `Links` do `react-router-dom` não causam uma atualização completa da página, como fazem as tags `<a>`.

Como sempre, primeiro precisamos importar o Componente `Link` do `react-router-dom`. Em seguida, o usaremos de maneira muito semelhante a `<a>`, exceto que, em vez de `href`, passaremos a **propriedade** `to` e nela indicaremos qual caminho ela deve seguir. Por exemplo, vamos adicionar um Link no componente `Home` do exemplo anterior (também adicionamos um link `<a>` para ver o que acontece):

```javascript
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Olá, sou o Mateo!!
      <a href="#/lista">Link normal para Lista</a>
      <Link to="/lista">Link do react-router para Lista</Link>
      <Link to="/">Link do react-router para Home</Link>
    </div>
  );
}
```

> Nos `NavLinks`, vamos adicionar a propriedade `activeClassName` e passar o nome da classe que queremos que o `Link` tenha quando a URL em sua propriedade `to` corresponder à URL em que estamos. Isso será útil, por exemplo, para ter um único componente de barra de navegação e alterar o estilo do link quando o usuário navegar para a página correspondente.

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/mensagens"
  className={({ isActive, isPending }) =>
    isPending ? "pendente" : isActive ? "ativo" : ""
  }
>
  Mensagens
</NavLink>;
```
