import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../componentes/Banner";
import { SectionHome, Input } from "../../componentes/section";
import Logo from "../../componentes/Logo";
import { Apresentacao } from "../../componentes/apresentacao";
import InputS from "../../componentes/input";
import { DivLogoInput, InputWrapper, SectionLogo } from "./styled";

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleSearch = (searchQuery) => {
    navigate(`/result?name=${searchQuery}`);  
  };

  return (
    <>
      <Banner image="/images/bannerBlack.png" />

      
      <SectionHome>
        <DivLogoInput>
      <Logo />
         <InputWrapper>
        <InputS onSearch={handleSearch}/>
        </InputWrapper>
        </DivLogoInput>

        <Apresentacao />
      </SectionHome>
    </>
  );
};
