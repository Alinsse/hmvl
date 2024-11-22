import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CharacterImage,
  CharacterName,
  CardList,
  CharacterDetails,
  CharacterDescription,
} from "./styled";

export const ResultCard = ({ resultado }) => {
  return (
    <CardList>
      {resultado.length > 0 ? (
        resultado.map((character) => {
          const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          return (
            <Link to={`/card/${character.id}`} key={character.id}>
              <CardContainer>
                <CharacterImage src={imageUrl} alt={character.name} />
                <CharacterDetails>
                  <CharacterName>{character.name}</CharacterName>
                  <CharacterDescription>
                    {character.description || "Descrição indisponível."}
                  </CharacterDescription>
                </CharacterDetails>
              </CardContainer>
            </Link>
          );
        })
      ) : (
        <p style={{ color: "#a01313", textAlign: "center" }}>
          Procurando personagem
        </p>
      )}
    </CardList>
  );
};
