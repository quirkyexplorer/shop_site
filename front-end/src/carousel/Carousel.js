import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import images from '../assets/';

const CenterCarousel = styled.div`
  display: flex;
  justify-content: center;
  position:relative;
`

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
  /* padding-left: 10px; */
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 960px;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  transition: transform 1s ease;
  gap:20px;
  /* transform: translateX(300px); */
`;

const CarouselItem = styled.div``;

const Image = styled.img`
  max-width: 300px;
  border-radius: 3%;
  /* box-shadow: 10px 10px 10px -5px #000000; */
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? 'right: 15%' : 'left: 15%')};
`;

export default function Carrousel() {

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

  return (
    <CenterCarousel>
      <CarouselWrapper>
        <CarouselTrack
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
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
        <Button direction={'left'} onClick={handlePrev}>left</Button>
        <Button direction={'right'} onClick={handleNext}>right</Button>
        {/* Implement event handlers for next and previous buttons */}
      </CarouselWrapper>
    </CenterCarousel>
  );
}
