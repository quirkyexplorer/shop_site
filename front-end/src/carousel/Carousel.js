import React from 'react'
import styled from 'styled-components'
import Slide from './components/Slide';
import images from '../assets/';

const CarouselWrapper = styled.div`
    overflow-x: auto;
  `;

export default function Carrousel() {
  
  
  const imageArray = images;

  return (
      
      <CarouselWrapper>
      <Slide images={imageArray} ></Slide>
      </CarouselWrapper>
      
  )
}
