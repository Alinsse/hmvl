import styled from "styled-components";

export const ApresentacaoStyled = styled.section`
  text-align: justify;
  margin-left: 314px;

  width: 23%;

  @media (max-width: 1920px) and (min-width: 1367px) {
    left: 300px;
    top: 500px;
    width: 23%;
  }

  @media (max-width: 1366px) {
    margin-left: 239px;
    width: 26%;
  }

  @media (max-width: 768px) {
    margin-top: 71px;
    margin-left: 29px;
    width: 90%;
  }

  h1 {
    color: #f46d1b;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;

    @media (max-width: 1366px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem; //mobile
    }
  }

  h2 {
    font-weight: 500;
    font-size: 64px;
    line-height: 62px;
    color: #ffffff;
    width: 92%;
    margin-bottom: 27px;
    margin-top: -15px;

    @media (max-width: 1366px) {
      font-size: 48px;
      line-height: 50px;
    }

    @media (max-width: 768px) {
      font-size: 50px; // mobile
      line-height: 38px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    width: 100%;

    @media (max-width: 1366px) {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
