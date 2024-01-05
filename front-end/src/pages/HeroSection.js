import React from 'react';
import styled from 'styled-components';
import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';


export default function HeroSection() {
  return (
    <HeroWrapper id='HeroWrapper'>
      <HeroCard id='HeroCard'>
        <ImageWrapper id='ImageWrapper'>
        <Image id="Image" src={Hero1} alt='girl in sportswear' />
        <Image2 id="Image2" src={Hero2} alt='girl in sportswear' />
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


// background-image: conic-gradient(
//   deeppink,
//   coral,
//   gold,
//   coral,
//   deeppink /* <-- same color! */
// );;


const HeroWrapper = styled.div`
 //hsl(315, 100%, 50%)
  display: flex;
  justify-content: center;
  align-items: center;
  background: conic-gradient( 
    from 300deg at 50% 50%,
    hsl(198, 82%, 5%),
    hsl(265, 100%, 50%), 
    hsl(333, 100%, 50%),
    hsl(265, 100%, 50%), 
    hsl(198, 82%, 5%)
    );
  margin: 0;
`;

const HeroCard  = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  padding-top: 150px;
  padding-bottom: 150px;
`

const Image  = styled.img`
  max-width: 600px;

  @media (max-width: 500px) {
      max-width: 100%;
  }

`;

const Image2 = styled.img`
  max-width: 600px;
  @media (max-width: 1024px) {
    display: none;
  }
` 
const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items:center;
  top: 65%;
  left: 35%;

  @media (max-width: 1024px) {
    left: 23%;
  }
  @media (max-width: 500px) {
    top: 65%;
    left: 20%;
  }
`;

const Banner = styled.div`
  font-size: 2rem;
  font-weight:bold;
  color: white; 
  padding-bottom: 20px;
  &:hover {
    color:   hsl(315, 100%, 50%);
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.a`
  background-color: black;
  text-align:center;
  font-weight: bold;
  font-size: 22px;
  color:white;
  padding: 1rem;
  width: 12.5rem;
  height: 2rem;
  // on hover apply below
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: .5rem;
    width: 8rem;
  }
`;