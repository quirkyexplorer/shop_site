import React from "react";
import styled from "styled-components";
import { useState } from "react";

// import images from '../assets/';

const CarouselWrapper = styled.div`
  // arrowsize number
  // cardWidth number
  // style? object
  // scrollingDisabled boolean 
  // gap: number
  // buttonHidden? boolean
  // initialScrollOffset: number
  // maxContentWindowWidth: nnumber
  // isCircular: boolean

  // Elements ****************
  // prevButton? jsxelement
  // nextButton? jsxElement
  // children? React.ChildrenArray<jsxElement>
  
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  /* transform: translateX(300px); */
`;

const CarouselItem = styled.div``;

const Image = styled.img`
  max-width: 300px;
`;

export default function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  console.log(images);
  return (
    <CarouselWrapper>
      <CarouselTrack
        style={{ transform: `translateX(-${currentIndex * 300}px)` }}
      >
        {images.map((image, index) => {
          return (
            <CarouselItem key={`img${index}`}>
              <Image src={image} alt={`carousel-item-${index}`} />
            </CarouselItem>
          );
        })}
      </CarouselTrack>
      {/* Add navigation buttons or indicators */}
      <button onClick={handlePrev}>left</button>
      <button onClick={handleNext}>right</button>
      {/* Implement event handlers for next and previous buttons */}
    </CarouselWrapper>
  );
}
