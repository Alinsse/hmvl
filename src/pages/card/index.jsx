import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  BannerResult,
  Comiics,
  DetailContainer,
  LogoCard,
  SearchInputSC,
} from "./styled";
import CardDetails from "../../componentes/cardDetails";

import CarrouselComics from "../../componentes/carrouselComics";
import Banner from "../../componentes/Banner";
import Logo from "../../componentes/Logo";
import { SearchInputS } from "../result/styled";
import SearchInput from "../../componentes/input";

const Card = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSearch = (searchQuery) => {
    Navigate(`/result?name=${searchQuery}`);
  };

  const url = "http://gateway.marvel.com/v1/public";
  const ts = "1";
  const apikey = "06ead66137452ef75685fcdc895a6c0b";
  const hash = "2774d42849c52a2ec23f9b2298e41e7a";

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const characterRes = await axios.get(
          `${url}/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
        );

        const character = characterRes.data.data.results[0];
        setCharacterData(character);

        const comicsRes = await axios.get(
          `${url}/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`
        );
        setComics(comicsRes.data.data.results);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  // Verificar se os dados foram carregados
  console.log("Dados do personagem:", characterData);

  return (
    <DetailContainer>
      <LogoCard>
        <Logo />
      </LogoCard>
      <SearchInputS>
        <SearchInput onSearch={handleSearch} />
      </SearchInputS>

      {characterData && <CardDetails characterData={characterData} />}

      {comics.length > 0 && <CarrouselComics comics={comics} />}
    </DetailContainer>
  );
};

export default Card;
