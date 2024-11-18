import React from "react";
import Slider from "react-slick";
import { ComicCard, ComicImage, ComicInfo, CarouselContainer } from "./styled";

const CarrouselComics = ({ comics }) => {
  // Configurações do react-slick
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
          <ComicCard key={comic.id}>
            <ComicImage
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <ComicInfo>
              <h3>{comic.title}</h3>
            </ComicInfo>
          </ComicCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CarrouselComics;
