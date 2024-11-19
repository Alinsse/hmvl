import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 90%;
  max-width: 600px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  z-index: 2;
`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
