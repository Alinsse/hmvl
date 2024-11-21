// componentes/CharacterCard/styled.jsx
import styled from "styled-components";

// Container lista cards
export const DetailContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 62%;
  position: relative;
  flex-flow: column;
  right: 258px;
`;

export const ContainerInfo = styled.div`
display: flex;
width: 100%;
gap: 15px;
`;

// Card
export const CharacterInfo = styled.div`
  width: 441px;
  display: flex;
  flex-direction: column;
 
`;

// img personagem
export const CharacterImage = styled.img`
  width: 208px;
  height: 258px;
  
  
`;


// nome personagem
export const CharacterName = styled.p`
  font-weight: 500;
  font-size: 20px;
 
  color: #ffffff;
  line-height: 20px;
  font-family: "Inter", sans-serif;
`;



export const Description = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 14px;
color: #FFFFFF;
width: 568px;
height: 277px;
opacity: 75%;
`;

export const Line =styled.div`
display: flex;
color: #FFFFFF;
text-align: center;
left: 4px;
position: relative;
gap: 42px;
width: 83%;
`;