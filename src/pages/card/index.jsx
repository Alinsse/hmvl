import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DetailContainer,
  CharacterImage,
  CharacterInfo,
} from "./styled";

const Card = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const url = "http://gateway.marvel.com/v1/public";
  const ts = "1";
  const apikey = "06ead66137452ef75685fcdc895a6c0b";
  const hash = "2774d42849c52a2ec23f9b2298e41e7a";

  useEffect(() => {
    axios
      .get(`${url}/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
      .then((res) => setCharacterData(res.data.data.results[0]))
      .catch((error) => console.error("Erro ao buscar detalhes:", error));
      getComics();
  }, [id]);

 
  const getComics = () => {
    axios
    .get(`${url}/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)
      .then((res) =>console.log(res.data.data.results))
      .catch((error) => console.error("Erro ao buscar detalhes:", error));
  }

  return (
    <DetailContainer>
      {characterData ? (
        <>
          <CharacterImage
            src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
            alt={characterData.name}
          />
          <CharacterInfo>
            <h2>{characterData.name}</h2>
            <p>{characterData.description || "Descrição não disponível."}</p>
          </CharacterInfo>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </DetailContainer>
  );
};

export default Card;
