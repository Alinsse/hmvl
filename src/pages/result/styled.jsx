import styled from "styled-components";

export const BannerResult = styled.section`
    display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url('/images/bannerBlack.png'); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Garante que a imagem cubra todo o espaço */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetições da imagem */

  @media (max-width: 768px) {
    background-position: top; /* Ajuste para telas menores */
  }
`;


   

export const LogoResult = styled.div`
position: relative;
  top: 10px;
  width: 327px;
  right: 741px;

  @media (max-width: 1366px) {
    right: 500px; 
    top: 5px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: -3px;
    width: 47%;
    text-align: -webkit-center;
  }
`;
export const CardsWrapper = styled.div`
    width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  

  @media (max-width: 1366px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 10px; 
  }
`;
export const SearchInputS = styled.div `
 width: 21%;
  
 display: flex;
    margin-top: -133px;
    margin-bottom: 9px;
    margin-left: 730px;
  border-radius: 5px;
  outline: none;
  z-index: 1;
  


  @media (max-width: 1366px) {
    top: -400px;
  }

  @media (max-width: 768px) {
    padding: 7px;
    padding-right: 40px;
    top: -165px;
   
  }
`;

