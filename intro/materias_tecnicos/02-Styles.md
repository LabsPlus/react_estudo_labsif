# Aplicando Estilos no React

Este é um tópico bastante específico, pois está mudando a filosofia que tínhamos de usar CSS da maneira que conhecemos para aplicar estilos, ou seja, de forma _global_ e _em cascata_. Agora, muitos desenvolvedores acreditam que esse método não é _escalável_ e que novas formas de aplicar estilos a cada componente precisam ser adotadas, em particular, eles falam sobre ter estilos _locais_ e não globais.

> Essa discussão de paradigmas ainda não tem um vencedor claro, há defensores e críticos de ambos os métodos por todo lado. Leve em consideração com cautela tudo o que você ler online sobre esse assunto.

## Estilos Inline

Uma das formas de aplicar estilos aos componentes é usando o atributo `style`. No React, essa propriedade recebe um _objeto JavaScript_, não uma _string CSS_ como no HTML nativo. Portanto, precisamos ajustar um pouco a sintaxe das regras de _CSS_. Vamos ver o exemplo na [documentação](https://facebook.github.io/react/docs/dom-elements.html#style) do React:

```jsx
const estiloDiv = {
  color: "azul",
  backgroundImage: "url(" + imgUrl + ")",
};

function ComponenteOlaMundo() {
  return <div style={estiloDiv}>Olá Mundo!</div>;
}
```

Conforme podemos ver, não podemos usar os mesmos nomes das propriedades _CSS_, pois eles entram em conflito com o operador `-`. Portanto, foi decidido que é melhor usar os nomes das regras usando _camelCase_.

## Styled Components

Essa forma de aplicar estilos é com styled components, onde criamos componentes com estilos predefinidos, eliminando a necessidade de criar um arquivo de estilos separado.

```jsx
import React from 'react';
import styled from "styled-components"

const DivBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Botoes = styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  color: beige;
`

export default Botoes () => {
    return (
      <DivBotoes>
        <Botoes>Botao 1</Botoes>
        <Botoes>Botao 2</Botoes>
      </DivBotoes>
    );
}

```

Nessa abordagem, utilizamos a biblioteca `styled-components` para criar componentes com estilos encapsulados. As regras de estilo são definidas diretamente no componente, evitando a necessidade de um arquivo de estilos separado. Isso torna o código mais organizado e reutilizável.

## Módulos CSS

Nessa abordagem, criamos estilos específicos para cada componente, auxiliando a não aplicação de estilos de forma global. Utilizamos classes como objetos.

```jsx
import styles from "./BemVindo.module.css";

export default function BemVindo() {
  return (
    <div className={styles.divBemVindo}>
      <h1 className={styles.titulo}>Eu sou um estudante de React!</h1>
      <h3 className={styles.subtitulo}>Meu nome e Mateo</h3>
    </div>
  );
}
```

Nesse caso, estamos utilizando módulos CSS, uma abordagem que cria uma relação entre as classes CSS e os componentes React. As classes são importadas do arquivo CSS correspondente como um objeto, permitindo seu uso em cada componente. Isso evita conflitos de nomes de classe e garante que os estilos sejam aplicados somente ao componente específico.

Aqui está um exemplo da folha de estilos CSS:

```css
/* Estilo CSS se pareceria com isso: */

.divBemVindo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #c5c5c5a2;
}

.titulo {
  font-size: 3em;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
  color: rgb(26, 26, 130);
}

.subtitulo {
  font-size: 1.5em;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

/* ... Outras regras de estilo ... */
```

Com os módulos CSS, cada classe é automaticamente mapeada para um nome único, evitando conflitos de nome e permitindo que os estilos sejam aplicados somente onde são necessários. Isso ajuda a manter os estilos organizados e separados por componente.
