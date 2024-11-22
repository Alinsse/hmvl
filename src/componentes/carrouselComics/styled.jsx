import styled from "styled-components";

export const CarouselContainer = styled.div`
 
  align-self: end;
  margin-top: -157px;
  width: 48%;
  padding: 0 27px 13px 28px;
  border-radius: 10px;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 1367px) {
    bottom: 180px;
    left: 150px;
    width: 30%;
    padding: 0 20px;
    text-align: -webkit-center;
  }

  @media (max-width: 768px) {
    bottom: -93px;
    left: 0;
    width: 85%;
    margin: 0 auto;
    padding: 0 27px;
    text-align: -webkit-center;
  }
`;

export const ComicsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px; 
    flex-wrap: wrap;
  }
`;

export const ComicCard = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  margin: 0 10px; 
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0; 

  @media (max-width: 768px) {
    width: 120px;
    height: 180px;
  }
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

 
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;
