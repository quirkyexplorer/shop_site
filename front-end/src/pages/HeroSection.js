import React from 'react';
import styled, { css } from 'styled-components';
import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';

const HeroWrapper = styled.div`
 //hsl(315, 100%, 50%)
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, hsl(265, 100%, 50%), hsl(0, 0%, 75%));
  margin: 0;
`;

const HeroCard  = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  padding-top: 150px;
  
`

const Image  = styled.img`
  max-width: 600px;

  /* Media query for Hero2 image */
  @media (max-width: 1024px) {
    ${({ hideAt1024 }) =>
      hideAt1024 &&
      css`
        display: none;
      `}
  }
  
  @media (max-width: 600px) {
      max-width: screen;
  }

`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items:center;
  top: 75%;
  left: 35%;

  @media (max-width: 1024px) {
    left: 23%;
  }
`;

const Banner = styled.h1`
  color: white;
  &:hover {
    color:   hsl(315, 100%, 50%);
  }
`;

const Button = styled.a`
  background-color: black;
  text-align:center;
  font-weight: bold;
  font-size: 22px;
  color:white;
  padding: 15px;
  width: 200px;
  height: 33px;
  // on hover apply below
  &:hover {
    background-color: white;
    color: black;
  }
`;
export default function HeroSection() {
  return (
    <HeroWrapper id='HeroWrapper'>
     {/* <h2 style={{textAlign: 'center', margin: 0}}>
        Welcome to home page
      </h2> */}
      <HeroCard id='HeroCard'>
        <ImageWrapper id='ImageWrapper'>
        <Image src={Hero1} alt='girl in sportswear' />
        <Image src={Hero2} alt='girl in sportswear' hideAt1024/>
        </ImageWrapper>
        <ButtonWrapper id='ButtonWrapper'>
          <Banner id='Banner'>Lista para el Veraneo?</Banner>
            <Button id='Button'>
              Ver Estilos
            </Button>
        </ButtonWrapper>
      </HeroCard>
      
    </HeroWrapper>
  )
}
