import styled from "styled-components";


export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
height: 100vh;
 

  
`;


export const CharacterImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;

  
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

  

 
`;


export const Comiics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 40%;

  
`;

export const LogoCard = styled.div`
right:730px;
position: relative;
top: 6px;
width: 16%;

`;

export const SearchInputS = styled.div `
top: -536px;
position: relative;
`;