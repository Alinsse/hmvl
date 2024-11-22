import styled from "styled-components";

// Lista de cards
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 
  
  max-width: 100%; 
  margin-top : 164px ;
  

  @media (max-width: 1920px) and (min-width: 1367px) {
    gap: 30px 35px;
    padding: 10px;
  }

  @media (max-width: 1366px) {
    gap: 25px 30px;
    margin-top: 66px;
    
  }

  @media (max-width: 768px) {
   
    
    margin-top: 34px;
    flex-direction: column;
    
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

  @media (max-width: 1366px) {
    width: 342px;
    height: 160px;
  }

  @media (max-width: 768px) {
    
    max-width: 300px;
    height: auto;
    flex-direction: column;
  }
`;

// Imagem do personagem
export const CharacterImage = styled.img`
  width: 133px;
  height: 165px;
  object-fit: cover;
  flex-shrink: 0;
  padding: 12px;
  border-radius: 18px;

  @media (max-width: 1366px) {
    width: 120px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 130px;
  }
`;

// Nome do personagem
export const CharacterName = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  line-height: 20px;

  @media (max-width: 1366px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const CharacterDetails = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background-color: #313140;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    gap: 10px;
  }
`;

export const CharacterDescription = styled.p`
  font-size: 14px;
  color: #ffffff;
  line-height: 14px;
  width: 244px;
  font-weight: 300;

  @media (max-width: 1366px) {
    font-size: 10px;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
`;
