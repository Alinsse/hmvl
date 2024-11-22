import styled from "styled-components";

export const BannerResult = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  background-image: url('/images/bannerBlack.png'); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Garante que a imagem cubra todo o espaço */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetições da imagem */
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-position: top; /* Ajuste para telas menores */
  }
`;
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  background-image: url('/images/bannerBlack.png'); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Garante que a imagem cubra todo o espaço */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetições da imagem */
  

  @media (max-width: 768px) {
    background-position: top; /* Ajuste para telas menores */
  }
`;

export const CharacterImage = styled.img`
 width: 100%;
  max-width: 400px;
  border-radius: 10px;

  @media (max-width: 1366px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;


export const CharacterInfo = styled.div`
max-width: 600px;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: #333;

    @media (max-width: 1366px) {
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;

    @media (max-width: 1366px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const Comiics = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 40%;

  @media (max-width: 1366px) {
    width: 90%;
    gap: 15px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
    gap: 10px;
  }
`;

export const LogoCard = styled.div`
display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha à esquerda */
  width: 94%;

 

  @media (max-width: 1366px) {
    justify-content: center; /* Centraliza para telas menores */
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 47%;
  }
`;

export const SearchInputS = styled.div `
width: 100%;
  margin: 0 auto;
  padding-top: 20px; 
  display: flex;
  justify-content: center;

  @media (max-width: 1366px) {
    padding-top: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;