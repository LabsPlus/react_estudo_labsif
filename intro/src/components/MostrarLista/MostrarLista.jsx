import React from "react";
import styled from "styled-components";

let Title = styled.h1`
  color: blue;
`;

let Ul = styled.ul`
  font-size: 17px;
`;

const MostrarLista = ({ listaAmigos }) => {
  const lista = listaAmigos.map((amigo) => <li key={amigo}>{amigo}</li>);

  return (
    <div>
      <Title>Amigos</Title>
      <Ul>{lista}</Ul>
    </div>
  );
};

export default MostrarLista;
