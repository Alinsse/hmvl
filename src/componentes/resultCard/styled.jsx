import styled from "styled-components";

// Lista de cards
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 37px 42px;
  
  position: relative;
  
  max-width: 1920px; // tela grande 
  margin: 0 auto; 
  right: 31px;
  top: 166px;
  

  @media (max-width: 1366px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Card individual
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #313140;
  border-radius: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 472px;
  height: 187px;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 472px;
    height: auto;
    flex-direction: column;
  }
`;

// Img personagem
export const CharacterImage = styled.img`
  width: 133px; /* Altura fixa correspondente ao card */
  height: 165px;
  object-fit: cover;
  flex-shrink: 0; /* Garante que a imagem não seja redimensionada */
  padding: 12px;
  border-radius: 18px;
`;

// Nome e informações do personagem
export const CharacterName = styled.h3`
  font-size: 20px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 500;
  line-height: 20px;
`;

export const CharacterDetails = styled.div`
  
  flex: 1; /* Faz com que este container ocupe o restante do espaço */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background-color: #313140;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const CharacterDescription = styled.p`
  font-size:14px;
  color: #FFFFFF;
 
  line-height: 14px;
  width: 244px;
  font-weight: 300;
`;
