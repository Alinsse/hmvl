// pages/Card/index.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../../componentes/cardDetails";

const Card = () => {
  const { id } = useParams(); // Captura o ID do personagem da URL
  const [characterData, setCharacterData] = useState(null);

  // Carregar os dados do personagem usando o ID
  useEffect(() => {
    const fetchCharacterData = async () => {
      const url = "http://gateway.marvel.com/v1/public";
      const ts = "1";
      const apikey = "06ead66137452ef75685fcdc895a6c0b";
      const hash = "2774d42849c52a2ec23f9b2298e41e7a";

      try {
        const response = await fetch(
          `${url}/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
        );
        const data = await response.json();
        setCharacterData(data.data.results[0]);
      } catch (error) {
        console.error("Erro ao buscar detalhes do personagem:", error);
      }
    };

    fetchCharacterData();
  }, [id]);

  if (!characterData) {
    return <p>Carregando detalhes do personagem...</p>;
  }

  return <CardDetails character={characterData} />;
};

export default Card;
