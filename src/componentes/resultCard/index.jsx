// componentes/CharacterCard/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CharacterImage, CharacterName, CardList } from "./styled";

export const ResultCard = ({ resultado }) => {
  return (
    <>
      {resultado.length > 0 ? (
        <CardList>
          {resultado.map((character) => {
            const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            return (
              <CardContainer key={character.id}>
                {/* Link para a página de detalhes do personagem */}
                <Link to={`/card/${character.id}`}>
                  <CharacterImage src={imageUrl} alt={character.name} />
                  <CharacterName>{character.name}</CharacterName>
                </Link>
              </CardContainer>
            );
          })}
        </CardList>
      ) : (
        <p style={{ color: "#a01313", textAlign: "center", position: "absolute" }}>
          Nenhum resultado encontrado.
        </p>
      )}
    </>
  );
};
