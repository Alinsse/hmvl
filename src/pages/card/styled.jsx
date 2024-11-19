import styled from "styled-components";


export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }

  @media (min-width: 1600px) {
    padding: 40px;
  }
`;


export const CharacterImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 300px;
  }

  @media (min-width: 1600px) {
    max-width: 500px;
  }
`;

// Informações do personagem
export const CharacterInfo = styled.div`
  max-width: 600px;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    text-align: left;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1600px) {
    h2 {
      font-size: 2.5rem;
    }

    p { font-size: 1.2rem;}
  }
`;


export const Comiics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 40%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }

  @media (min-width: 1600px) {
    padding: 40px;
  }
`;