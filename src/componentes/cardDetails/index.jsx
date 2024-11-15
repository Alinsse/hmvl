// componentes/CardDetails/index.jsx
import React from "react";
import { DetailContainer, CharacterImage, CharacterInfo } from "./styled";

const CardDetails = ({ character }) => {
  // Verificar se 'character' está definido
  if (!character) {
    return <p>Carregando detalhes do personagem...</p>;
  }

  // Obter a URL da imagem do personagem
  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
    <DetailContainer>
      <CharacterImage src={imageUrl} alt={character.name} />
      <CharacterInfo>
        <h2>{character.name}</h2>
        <p>{character.description || "Descrição não disponível."}</p>
      </CharacterInfo>
    </DetailContainer>
  );
};

export default CardDetails;

