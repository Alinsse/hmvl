import React from "react";
import Slider from "react-slick";
import {
  ComicCard,
  ComicImage,
  ComicTitle,
  CarouselContainer,
  ComicsWrapper,
} from "./styled";

const CarrouselComics = ({ comics }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {comics.map((comic) => (
          <ComicsWrapper key={comic.id}>
            <ComicCard>
              <ComicTitle>{comic.title}</ComicTitle>
              <ComicImage
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
            </ComicCard>
          </ComicsWrapper>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CarrouselComics;
