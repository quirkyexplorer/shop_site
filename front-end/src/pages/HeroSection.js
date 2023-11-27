import React from 'react';
import styled from 'styled-components';
import { heroes } from '../assets';

const HeroWrapper = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, hsl(0, 0%, 75%), hsl(0, 0%, 0%));
  height: 100vh;
  margin: 0;
`;

const HeroCard  = styled.div`
  position: relative;
`;

const Image  = styled.img`
  max-width: 500px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items:center;
  top: 75%;
  left: 33%;
`;

const Banner = styled.h1`
  color: white;
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
`;
export default function HeroSection() {
  return (
    <HeroWrapper>
     {/* <h2 style={{textAlign: 'center', margin: 0}}>
        Welcome to home page
      </h2> */}
      <HeroCard>
        <div>
          {heroes.map((hero, index) => {
          return (
            <Image key={`hero${index}`} alt='' src={hero}/>
          );
        })}
        </div>
        <ButtonWrapper>
          <Banner >Lista para el Veraneo?</Banner>
            <Button>
              Ver Estilos
            </Button>
        </ButtonWrapper>
      </HeroCard>
      
    </HeroWrapper>
  )
}
