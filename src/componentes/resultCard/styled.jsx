// componentes/CharacterCard/styled.jsx
import styled from "styled-components";

// Container para a lista de cards
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 80%;
  position: relative;
  
`;

// Estilização do container de cada card
export const CardContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313140;
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Estilização da imagem do personagem
export const CharacterImage = styled.img`
  width: 133px;
  height: 165px;
  border-radius: 12px;
  
`;

// Estilização do nome do personagem
export const CharacterName = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  line-height: 20px;
  font-family: "Inter", sans-serif;
`;
