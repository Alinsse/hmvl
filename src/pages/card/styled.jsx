import styled from "styled-components";


export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
 

  @media (max-width: 1366px) {
    padding:5px;
  }

  @media (max-width: 768px) {
    padding: 10px;
   
  }
`;


export const CharacterImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;

  @media (max-width: 1366px) {
    max-width: 100%
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
 position: relative;
  top: 10px;
  width: 327px;
  right: 741px;

  @media (max-width: 1366px) {
    right: 500px; 
    top: 5px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: -3px;
    width: 47%;
    text-align: -webkit-center;
   
  }
`;

export const SearchInputS = styled.div `
position: relative;
  top: -500px; 
  margin: 0 auto; 

  @media (max-width: 1366px) {
    top: -350px;
  }

  @media (max-width: 768px) {
    top: -150px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto; 
    
  }
`;