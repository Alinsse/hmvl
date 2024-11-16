import styled from "styled-components";

// Lista de cards
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  position: relative;
  width: 100%; 
  max-width: 1920px; // tela grande 
  margin: 0 auto; 

  @media (max-width: 1366px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Card individual
export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%; 
  max-width: 280px;  
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1366px) {
    max-width: 240px; // 1366
  }

  @media (max-width: 1024px) {
    max-width: 220px;
  }

  @media (max-width: 768px) {
    max-width: 180px; 
  }
`;

// Img personagem
export const CharacterImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px; 
  }

  @media (min-width: 1600px) {
    height: 300px; 
  }
`;

// Nome
export const CharacterName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;
