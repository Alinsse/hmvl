import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 45%;
 
`;

export const ComicCard = styled.div`
  display: inline-block;

  width: 120px;
  height: 200px;
  
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ComicImage = styled.img`
  width: 113px;
  height: 192px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const ComicInfo = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 1rem;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
