import React from "react";
import { DetailContainer, CharacterImage, CharacterInfo } from "./styled";

const CardDetails = ({ characterData }) => {
  // Verificar se os dados estão disponíveis
  if (!characterData) {
    return <p>Dados do personagem não disponíveis.</p>;
  }

  const { name, description, thumbnail } = characterData;

  return (
    <DetailContainer>
      <CharacterImage
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <CharacterInfo>
        <h2>{name}</h2>
        <p>{description || "Descrição não disponível."}</p>
      </CharacterInfo>
    </DetailContainer>
  );
};

export default CardDetails;
