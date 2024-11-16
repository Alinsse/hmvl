import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CharacterImage, CharacterName, CardList,
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
                <CharacterName>{character.name}</CharacterName>
              </CardContainer>
            </Link>
          );
        })
      ) : (
        <p style={{ color: "#a01313", textAlign: "center" }}>
          Nenhum resultado encontrado.
        </p>
      )}
    </CardList>
  );
};
