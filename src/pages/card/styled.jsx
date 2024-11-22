import styled from "styled-components";

export const BannerResult = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url("/images/bannerBlack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1366px) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
  }
  @media (max-width: 768px) {
    background-position: top;
    background-attachment: scroll;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;

  @media (max-width: 1366px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
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
    width: 95%;
    padding: 10px;
    gap: 10px;
  }
`;

export const LogoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 94%;

  @media (max-width: 1366px) {
    right: 500px;
    top: 5px;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 80%;
    justify-content: center;
  }
`;

export const SearchInputS = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 1366px) {
    margin-left: auto;
    margin-right: 250px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 10px;
  }
`;
