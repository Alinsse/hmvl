import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  bottom: 252px;
  left: 401px;
  width:48%;
  padding: 0 27px 13px 28px;
 
 
  border-radius: 10px;

  z-index: 1000;
  overflow: hidden;
`;

export const ComicsWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Espaçamento entre os quadrinhos */
  align-items: center;
`;

export const ComicCard = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  margin: 0 10px; /* Espaçamento lateral */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0; /* Evita que o card diminua de tamanho */
`;

export const ComicTitle = styled.div`
  position: absolute;
 bottom: 0px;
  width: 100%;
  line-height: 20px;
  display: flex;
  align-items: center;
  
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
 

`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%;
 
`;
