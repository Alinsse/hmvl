import styled from "styled-components";


export const SectionHome = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  background-image: url('/images/bannerBlack.png'); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Garante que a imagem cubra todo o espaço */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetições da imagem */
  background-attachment: fixed;
  

  @media (max-width: 1920px) and (min-width: 1366px) {
    margin-top: 130px;
  }

  

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 80px;
  }
`;


export const SearchContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1920px) and (min-width: 1366px) {
    max-width: 450px;
  }

  @media (max-width: 1366px) {
    max-width: 400px;
    margin: 15px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DivLogoInput = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;


export const InputWrapper = styled.div`
    width: 100%;
 
   

  @media (max-width: 768px) {
    padding: 7px;
    padding-right: 40px;
  }
`;

export const SectionLogo= styled.section`
 position: absolute;
  top: 162px;
  width: 25%;
  left: 335px;

  @media (max-width: 1920px) and (min-width: 1366px) {
    left: 356px; 
    width: 30%;
  }

  @media (max-width: 1366px) {
    left: 150px;
    width: 35%;
    top: 150px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 30px;
    width: 47%;
    text-align: -webkit-center;
  }
`;

