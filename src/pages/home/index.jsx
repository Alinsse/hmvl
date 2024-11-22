import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../componentes/Banner";
import { SectionHome, Input } from "../../componentes/section";
import Logo from "../../componentes/Logo";
import { Apresentacao } from "../../componentes/apresentacao";
import InputS from "../../componentes/input";
import { BannerH, DivLogoInput, InputWrapper, SectionLogo } from "./styled";
import { BannerHome } from "../../componentes/section/styled";

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleSearch = (searchQuery) => {
    navigate(`/result?name=${searchQuery}`);
  };

  return (
    <BannerH>
      <SectionHome>
        <Banner image="/images/bannerBlack.png" />

        <DivLogoInput>
          <Logo />
          <InputWrapper>
            <InputS onSearch={handleSearch} />
          </InputWrapper>
        </DivLogoInput>

        <Apresentacao />
      </SectionHome>
    </BannerH>
  );
};
