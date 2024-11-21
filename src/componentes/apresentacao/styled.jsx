import styled from "styled-components";

export const ApresentacaoStyled = styled.section`
  text-align: justify; /* Centraliza o texto horizontalmente */
  position: absolute;
  left: 325px;
  top: 512px;
  width: 60%; /* Ajuste para telas grandes */
  
  @media (max-width: 1920px) and (min-width: 1367px) {
    left: 300px; /* Ajuste para telas Full HD */
    top: 500px;
    width: 70%;
  }

  @media (max-width: 1366px) {
    left: 200px; /* Ajuste para telas 1366px */
    top: 450px;
    width: 80%;
  }

  @media (max-width: 768px) {
    position: relative; /* Remove posicionamento absoluto no mobile */
    left: 14px;
    top: 225px;
    width: 90%;
    padding: 10px; /* Adiciona espaçamento interno para textos */
  }

  h1 {
    color: #F46D1B;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;

    @media (max-width: 1366px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Ajuste para telas menores */
    }
  }

  h2 {
    font-weight: 500;
    font-size: 64px;
    line-height: 62px;
    color: #FFFFFF;
    width: 94%;

    @media (max-width: 1366px) {
      font-size: 48px; /* Ajuste para telas 1366px */
      line-height: 50px;
    }

    @media (max-width: 768px) {
      font-size: 50px; /* Ajuste para mobile */
      line-height: 38px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    width: 100%;

    @media (max-width: 1366px) {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
