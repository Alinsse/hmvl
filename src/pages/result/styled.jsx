import styled from "styled-components";

export const BannerResult = styled.section`
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
  }
  @media (max-width: 768px) {
    background-position: top;
    background-attachment: scroll;
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
    right: 0;
    width: 47%;
    text-align: center;
  }
`;
export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: -99px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    margin-top: -60px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 0;
    justify-items: center;
  }
`;
export const SearchInputS = styled.div`
  width: 21%;
  display: flex;
  margin-top: -148px;
  margin-bottom: 89px;
  margin-left: 751px;
  border-radius: 5px;
  outline: none;
  z-index: 1;

  @media (max-width: 1366px) {
    margin-left: auto;
    margin-right: 250px;
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
