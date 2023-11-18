import React from 'react'
import styled from 'styled-components'
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

const SlideWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  max-width: 25%;
`;

export default function Slide({images}) {
  return (
    <SlideWrapper>
      {images.map((image, index) => (
        <Image key={`image${index}`} src={image} alt={`Slide ${index + 1}`} />
        ))}
        <LeftArrow/>
        <RightArrow/>
    </SlideWrapper>
  )
}
