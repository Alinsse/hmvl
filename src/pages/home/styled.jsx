import styled from "styled-components";


export const SectionHome = styled.section`
 position: absolute;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-height: calc(100vh - 200px);
  width: 100%;
  background-color: #121212;
  margin-top: 150px;
  

  @media (max-width: 1920px) and (min-width: 1366px) {
    margin-top: 130px;
  }
  

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 80px;
  }
`;




export const DivLogoInput = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;


export const InputWrapper = styled.div`
    width: 100%;
 
   

  @media (max-width: 768px) {
    padding: 7px;
    padding-right: 40px;
  }
`;

export const SectionLogo= styled.section`
 position: absolute;
  top: 162px;
  width: 25%;
  left: 335px;

  @media (max-width: 1920px) and (min-width: 1366px) {
    left: 356px; 
    width: 30%;
  }

  @media (max-width: 1366px) {
    left: 150px;
    width: 35%;
    top: 150px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 30px;
    width: 47%;
    text-align: -webkit-center;
  }
`;

