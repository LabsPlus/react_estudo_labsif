# React.js

O React é uma biblioteca de JavaScript que é declarativa, eficiente e flexível e é usada para construir interfaces de usuário. Essa biblioteca foi criada pela equipe do _Facebook_ e _Instagram_, e foi liberada como um projeto **open source** (código aberto).

> A diferença entre programação declarativa e imperativa é que, na programação declarativa, nós dizemos à computadora **o que** queremos fazer (e ela se encarrega de saber como fazê-lo), enquanto na programação imperativa nós dizemos exatamente **como** queremos que as coisas sejam feitas. Pode parecer que são duas coisas similares, mas vamos ver a diferença com um exemplo:

```javascript
const numbers = [4, 2, 3, 6];
// Imperativo (dizemos COMO queremos que as coisas sejam feitas)
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
// Declarativo (dizemos O QUE queremos que seja feito)
numbers.reduce(function (previous, current) {
  return previous + current;
});
```

Ao usar o _React_, precisamos pensar em termos de **componentes**. Quando construímos uma página com o _React_, devemos considerar nosso site ou página como uma série de **pequenos componentes**. Na verdade, podemos dizer que tudo é um _componente_. Na verdade, teremos _componentes_ que são compostos por outros _componentes_. Isso ocorre quando enfrentamos um problema grande que, na melhor ou única forma de resolvê-lo com o _React_, é dividindo-o em problemas menores. Isso também torna os componentes altamente **reutilizáveis**.

> Esse estilo de desenvolvimento é conhecido como **component driven development** (desenvolvimento orientado a componentes).

O React também é muito eficiente em termos de desempenho e possui um recurso chamado **Virtual DOM** (DOM Virtual), o que permite renderizar páginas rapidamente, mantendo o código legível e fácil de gerenciar.

## Virtual DOM

Quando desejamos acompanhar as mudanças em algum modelo e, em seguida, refleti-las no DOM (renderização), devemos levar em consideração duas coisas importantes:

1. Quando os dados foram modificados.
2. Quais elementos do DOM precisam ser atualizados.

Para o primeiro ponto, o React utiliza um [modelo de observador](https://en.wikipedia.org/wiki/Observer_pattern) (isso significa que não precisa ficar verificando constantemente em busca de mudanças). Portanto, quando algo muda, notifica imediatamente o React.

Quanto ao segundo ponto, o React constrói uma representação do DOM na memória e calcula quais elementos do DOM serão alterados. Realizar alterações diretamente no DOM consome muitos recursos, por isso o React foca em minimizar ao máximo as mudanças no DOM real. Em termos simples, quando algo muda no estado do modelo, a ideia não é modificar diretamente o DOM, mas efetuar mudanças no Virtual DOM. Em seguida, são calculadas as diferenças entre o DOM real e o Virtual DOM (para isso, são utilizados [algoritmos de diferença altamente eficientes](http://snip.ly/ywCe#http://calendar.perfplanet.com/2013/diff/)), e, finalmente, são feitas as alterações mínimas necessárias no DOM real.

Em resumo, o Virtual DOM do React é uma técnica que otimiza o processo de atualização do DOM ao minimizar as mudanças diretas e calcular as alterações mais eficientes. Isso contribui para um melhor desempenho e uma experiência do usuário mais fluída.

### Desenvolvimento Orientado a Componentes

Vamos observar a imagem abaixo, onde cada caixa com uma cor específica representa um componente. Essa é uma das muitas formas de dividir um único elemento ou funcionalidade em nosso site.

![Diagrama de Anidamiento de Componentes](https://miro.medium.com/v2/resize:fit:1368/1*Wv2y3zzKdLUpjpCNXQ1PBA.png)

### O que um _Componente_ deve conter?

Ao projetar componentes, é importante levar em consideração o princípio de design chamado _[princípio da responsabilidade única](https://en.wikipedia.org/wiki/Single_responsibility_principle)_. Basicamente, devemos projetar cada componente para ser responsável por _apenas uma coisa_. Pensar dessa maneira pode não ser fácil; [aqui](https://facebook.github.io/react/docs/thinking-in-react.html) há um tutorial do _Facebook_ para começar a pensar em termos de componentes.

De qualquer forma, a melhor maneira de aprender é através da prática. Ao usar o React, você perceberá quando é conveniente subdividir um componente em outros e quando não é. Na verdade, você não deve se preocupar muito em adotar essa mentalidade antes de começar. Aceite o fato de que, enquanto você desenvolve com o React, sua forma de pensar mudará naturalmente, e não o contrário.

### Criando nosso primeiro componente

Como podemos imaginar, um _Componente_ no React é representado por uma classe ou um objeto chamado _Component_. Ele incorpora uma série de propriedades e métodos que fornecem o comportamento e o poder do React.

Quando criamos um novo componente, basicamente "herdamos" todas essas propriedades e métodos do objeto _Component_ e depois personalizamos o novo componente de acordo com nossas necessidades. Vamos ver um exemplo com um componente de classe:

```javascript
import React from "react";

class HelloWorld extends React.Component {
  render() {
    return <div>Olá, eu sou o Mateo!!</div>;
  }
}

export default HelloWorld;
```

Da mesma forma, podemos ver o exemplo com um componente de função:

```javascript
import React from "react";

function HelloWorldFunction() {
  return <div>Olá, eu sou o Mateo!</div>;
}

export default HelloWorldFunction;
```

## Props

Uma das vantagens de dividir tudo em Componentes é que eles podem ser reutilizáveis. Para que sejam reutilizáveis, podemos alterar um pouco seu comportamento passando alguns dados. No React, esses dados são chamados de **props** (propriedades) de um Componente. Vamos ver como passar _props_ para um Componente.

As _props_ funcionam como os _atributos_ HTML, ou seja, quando usamos um Componente, podemos adicionar _props_ escrevendo seus nomes dentro da tag do próprio componente. Por exemplo, para adicionar a _prop_ `name` ao Componente que criamos antes, quando o usamos, escrevemos `<HelloWorld name='Mateo' />`. Dessa forma, podemos passar uma ou várias _props_ para o mesmo Componente.

Em um componente de função:

```javascript
import React from "react";
import ReactDOM from "react-dom";

function HelloWorldFunction(props) {
  return <div>Olá, {props.name}!!</div>;
}

const nomeVariavel = "Mateo";

ReactDOM.render(
  <HelloWorldFunction name={nomeVariavel} />,
  document.getElementById("app")
);
```

Agora temos um Componente que serve para saudações! Só precisamos passar uma _prop_ com o nome de quem queremos cumprimentar. É um exemplo simples, mas demonstra a forma como o React passa _props_ para seus Componentes.

## Aninhando Componentes

Como mencionamos antes, no React, _tudo_ é um componente, então é lógico pensar que teremos _componentes dentro de componentes_ o tempo todo. Vamos ver com um exemplo como isso funciona e como podemos passar dados (no React, chamamos de _props_) para os componentes.

Agora, vamos criar um exemplo um pouco mais complexo, onde teremos dois componentes. Um deles vai chamar o outro e passar algumas propriedades para ele, vamos ver como fazer isso:

```javascript
function ContenedorAmigos() {
  const name = "Eu sou Mateo";
  const amigos = ["Santi", "Guille", "Facu", "Solano"];
  return (
    <div>
      <h3> Nome: {name} </h3>
      <MostrarLista nomes={amigos} />
    </div>
  );
}
```

Temos duas variáveis (`name` e `amigos`) e retornamos um XML que usa essas variáveis. Como você pode ver, podemos acessar uma _prop_ do mesmo componente usando `{}`. Dessa forma, `{name}` será substituído por "Eu sou Mateo". Em seguida, chamamos um componente que ainda não definimos, chamado `MostrarLista`, e passamos o array `amigos` como propriedade. Portanto, dentro do `MostrarLista`, teremos acesso a esse array como uma _prop_.

Vamos definir o elemento filho:

```javascript
function MostrarLista(props) {
  const { nomes } = props;
  const lista = nomes.map((amigo) => <li key={amigo}> {amigo} </li>);
  return (
    <div>
      <h3> Amigos </h3>
      <ul>{lista}</ul>
    </div>
  );
}
```

A primeira coisa que notamos é o uso de JavaScript para criar elementos HTML mais complexos. Neste caso, usamos a função `map` para criar um elemento `<li>` para cada _amigo_ na lista ou array.
O atributo `key` é uma propriedade especial que precisa ser adicionada a cada item da lista, para evitar erros. Desta forma o react tem como identificar cada elemento unico.
