import styled from "styled-components";

export const BannerHome = styled.section`
  margin-top: 85px;

  width: 100%;
  height: 100vh;

  @media (max-width: 1920px) and (min-width: 1367px) {
    height: 90vh;
  }

  @media (max-width: 1366px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
    margin-top: 76px;
  }
`;
