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

export const BannerH = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url("/images/bannerBlack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 1366px) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
  }

  @media (max-width: 768px) {
    background-image: none;
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

export const DivLogoInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 58px;
  margin-left: 196px;
  width: 35%;

  @media (max-width: 1366px) {
    width: 39%;
    margin-top: -70px;
    margin-bottom: -15px;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: -14px;
    margin-bottom: -34px;
    margin-left: auto;
    margin-right: auto;
    padding: 7px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: -27px;

  @media (max-width: 768px) {
    padding: 7px;
    padding-right: 40px;
  }
`;

export const SectionLogo = styled.section`
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
