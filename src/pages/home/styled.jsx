import styled from "styled-components";


export const SectionHome = styled.section`
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

  @media (max-width: 1366px) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 80px;
  }
`;


export const SearchContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1920px) and (min-width: 1366px) {
    max-width: 450px;
  }

  @media (max-width: 1366px) {
    max-width: 400px;
    margin: 15px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonSearch = styled.button`
    background-color: #ff3d00;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
  border-radius: 0 5px 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e63900;
  }

  @media (max-width: 1920px) and (min-width: 1366px) {
    padding: 8px;
  }

  @media (max-width: 1366px) {
    padding: 7px;
  }

  @media (max-width: 768px) {
    padding: 6px;
    right: 5px;
  }
`;


export const Input = styled.input`
    width: 100%;
  padding: 10px;
  padding-right: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  z-index: 1;

  @media (max-width: 1920px) and (min-width: 1366px) {
    padding: 9px;
  }

  @media (max-width: 1366px) {
    padding: 8px;
    padding-right: 45px;
  }

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
    left: 270px; /* Ajuste para 1366px */
    width: 30%;
  }

  @media (max-width: 1366px) {
    left: 150px; /* Ajuste para dispositivos menores */
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

