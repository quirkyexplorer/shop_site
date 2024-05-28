import React from "react";
import useSWR from 'swr';
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as RightSvg } from "../svgs/rightArrow.svg";
import { ReactComponent as LeftSvg } from "../svgs/leftArrow.svg";

const getUploadcareImageUrl = (uuid, transformations) => {
  const baseUrl = `https://ucarecdn.com/${uuid}`;
  const transformationsString = transformations.join("/");
  return `${baseUrl}/${transformationsString}/`;
};


async function fetcher() {
  const productsResponse = await fetch('http://localhost:8080/api/products');
  
  if (!productsResponse.ok) {
    throw new Error(`Network response was not ok: ${productsResponse.statusText}`);
  }

  const productsData = await productsResponse.json();
  
  const uuids = productsData.map(product => product.imageUuid);

  // below we await several request for each photo  we then make
  // an array of promises in uploadedImages
  const promises = uuids.map(async (uuid) => {
    
    const imageUrl = getUploadcareImageUrl(uuid, [
      "-/preview/600x800/",
      "-/format/auto/",
      "-/quality/smart/",
    ]);
    return imageUrl;
  });

  const uploadedImages = await Promise.all(promises);

  if (!uploadedImages || uploadedImages.length === 0) {
    throw new Error('No images were uploaded.');
  }

  return uploadedImages;
}


export default function Carrousel() { 
  const { data, isLoading, error } = useSWR( "http://localhost:8080/api/products", fetcher);
  const [images, setImages] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>Something's gone wrong</p>;
  }

  return (
    <CenterCarousel id="CenterCarousel">
      <CarouselWrapper id="CarouselWrapper">
        {/* here we pass values to move hidden pictures by */}
        <CarouselTrack
          id="CarouselTrack"
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
        >
          {images.map((image, index) => {
            return (
              <CarouselItem id="CarouselItem" key={`img${index}`}>
                <Image id="Image" src={image} alt={`carousel-item-${index}`} />
              </CarouselItem>
            );
          })}
        </CarouselTrack>

        {/* navigation buttons or indicators */}
        <Button id="Button" direction={"left"} onClick={handlePrev}>
          <LeftSvg />
        </Button>

        <Button id="Button" direction={"right"} onClick={handleNext}>
          <RightSvg />
        </Button>
      </CarouselWrapper>
    </CenterCarousel>
  );
}

const CenterCarousel = styled.div`
  height: 100vh;
  padding-top: 100px;
  //background-color: hsl(0, 0%, 75%);
  /* background: conic-gradient( 
    from 300deg at 50% 50%,
    hsl(198, 82%, 5%),
    hsl(265, 100%, 50%), 
    hsl(265, 100%, 50%), 
    hsl(198, 82%, 5%)
    ); */
  background-color: hsl(198, 82%, 5%);
  background-image: linear-gradient(
      calc(180deg - 20deg),
      transparent 0%,
      transparent 70%,
      hsl(265, 100%, 50%) 50%,
      hsl(198, 82%, 5%) 100%
    ),
    linear-gradient(
      calc(180deg - 20deg),
      transparent 0%,
      transparent 50%,
      hsl(265, 100%, 35%) 50%,
      hsl(198, 82%, 5%) 100%
    );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CarouselWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 960px;
  overflow: hidden;

  @media (max-width: 950px) {
    max-width: 645px;
  }

  @media (max-width: 600px) {
    max-width: 325px;
  }
`;

const CarouselTrack = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  transition: transform 1s ease;
  gap: 20px;
  /* transform: translateX(300px); */
`;

const CarouselItem = styled.div``;

const Image = styled.img`
  max-width: 300px;
  border-radius: 3%;
  box-shadow: 0px 0px 10px 1px hsl(265, 100%, 50%);
`;

const Button = styled.div`
  display: flex;
  position: absolute;
  border-radius: 50%;
  background-color: hsl(315, 100%, 50%);
  border-radius: 50%;
  top: 50%;

  /* below we move the pictures manipulating css */

  @media (max-width: 2000px) {
    ${(props) => (props.direction === "right" ? "left:90%" : "right:90%")};
  }

  @media (max-width: 600px) {
    top: 90%;
    ${(props) => (props.direction === "right" ? "left:60%" : "right:60%")};
  }

  /* Hover effect */
  :hover {
    transform: scale(1.3);
    background-color: hsl(315, 100%, 50%);
    border-radius: 50%;
    transition: transform 300ms;
  }
`;
