import styled from "styled-components";


export const BannerHome = styled.section`
   
margin-top: 85px;
 
  width: 100%;
  height: 100vh;

  /* Ajustes para resoluções específicas */
  @media (max-width: 1920px) and (min-width: 1367px) {
    height: 90vh; /* Reduz um pouco para manter proporção */
  }

  @media (max-width: 1366px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 60vh; /* Altura menor para dispositivos móveis */
    margin-top: 76px;
  }
`;