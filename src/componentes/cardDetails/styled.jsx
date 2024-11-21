import styled from "styled-components";


export const DetailContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 62%;
  position: relative;
  flex-flow: column;
  right: 258px;

  @media (max-width: 1366px) {
    width: 80%; 
    right: 100px;
  }

  @media (max-width: 768px) {
    width: 90%; 
    left: -10px;
    text-align: center;
    top: 66px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Card
export const CharacterInfo = styled.div`
  width: 441px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1366px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// img personagem
export const CharacterImage = styled.img`
  width: 208px;
  height: 258px;

  @media (max-width: 1366px) {
    width: 180px; 
    height: 230px;
  }

  @media (max-width: 768px) {
    width: 150px; 
    height: 200px;
  }
`;

// nome personagem
export const CharacterName = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  line-height: 20px;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
    position: relative;
    
  }
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #FFFFFF;
  width: 568px;
  height: 277px;
  opacity: 75%;

  @media (max-width: 1366px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 12px;
  }
`;

export const Line = styled.div`
  display: flex;
  color: #FFFFFF;
  text-align: center;
  left: 4px;
  position: relative;
  gap: 42px;
  width: 83%;

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`;

