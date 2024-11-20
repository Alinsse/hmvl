import React from "react";
import { DetailContainer, CharacterImage, CharacterInfo, Stats, Description, NameCharacter, ContainerInfo, CharacterName, Line } from "./styled";

const CardDetails = ({ characterData }) => {
  // Verificar se os dados estão disponíveis
  if (!characterData) {
    return <p>Dados do personagem não disponíveis.</p>;
  }

  const { name, description, thumbnail, stories, events, series, comics } = characterData;

  return (
    <DetailContainer>
      <ContainerInfo>
      <CharacterImage
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <CharacterInfo>
        <CharacterName>
        <h2>{name}</h2>
        </CharacterName>
        <Line>
                <p><strong>Quadrinhos:</strong> {comics.available}</p>
          <p><strong>Séries:</strong> {series.available}</p>
          <p><strong>Eventos:</strong> {events.available}</p>
          <p><strong>Histórias:</strong>  {stories.available}</p>
          </Line>
      </CharacterInfo>
      </ContainerInfo>
      <Description>
          <p>{description || "Descrição não disponível."}</p>
          </Description>
    </DetailContainer>
  );
};

export default CardDetails;
