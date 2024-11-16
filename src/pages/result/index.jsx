import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ResultCard } from "../../componentes/resultCard";
import Banner from "../../componentes/Banner";
import { PageContainer, CardsWrapper } from "./styled";
import SearchInput from "../../componentes/input";

export const Result = () => {
  const [params] = useSearchParams();
  const name = params.get("name");
  const [resultado, setResultado] = useState([]);
  const navigate = useNavigate();
  const url = "http://gateway.marvel.com/v1/public";
  const ts = "1";
  const apikey = "06ead66137452ef75685fcdc895a6c0b";
  const hash = "2774d42849c52a2ec23f9b2298e41e7a";

  const handleSearch = (searchQuery) => {
    navigate(`/result?name=${searchQuery}`);  
  };


  useEffect(() => {
    if (name) {
      axios
        .get(
          `${url}/characters?nameStartsWith=${name}&ts=${ts}&apikey=${apikey}&hash=${hash}`
        )
        .then((res) => {
          setResultado(res.data.data.results);
        })
        .catch((error) => {
          console.error("Erro ao buscar personagens:", error);
        });
    }
  }, [name]);

  return (
    <PageContainer>
      <Banner image="/images/bannerBlack.png" />
      <SearchInput onSearch={handleSearch} /> 
      <CardsWrapper>
        <ResultCard resultado={resultado} />
      </CardsWrapper>
    </PageContainer>
  );
};
