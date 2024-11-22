import styled from "styled-components";



export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 62%;
  margin-right: 535px;
  z-index: 10; /* Traz os elementos para frente do banner */

  @media (max-width: 1366px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin-top: 66px;
    margin-right: 20px;
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
  }
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  width: 568px;
  height: 277px;
  opacity: 0.75;

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
  color: #ffffff;
  text-align: center;
  gap: 42px;
  width: 83%;
  z-index: 10; /* Garante que está à frente do banner */

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`;

//sem position