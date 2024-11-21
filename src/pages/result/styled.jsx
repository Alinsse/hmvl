import styled from "styled-components";

export const BannerResult = styled.section`
      display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;

  @media (max-width: 1366px) {
    max-width: 1366px;
  }

  @media (max-width: 700px) {
    padding: 10px;
    min-height: 100vh; 
  
    max-width: 100%;
  }
`;


   

export const LogoResult = styled.div`
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
export const CardsWrapper = styled.div`
    width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px; 

  @media (max-width: 1366px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 10px; 
  }
`;
export const SearchInputS = styled.div `
 width: 100%;
  padding: 10px;
  padding-right: 50px;
  position: relative;
  border-radius: 5px;
  outline: none;
  z-index: 1;
  top: -520px;
  left: 650px;


  @media (max-width: 1366px) {
    top: -400px;
  }

  @media (max-width: 768px) {
    padding: 7px;
    padding-right: 40px;
    top: -165px;
   
  }
`;

