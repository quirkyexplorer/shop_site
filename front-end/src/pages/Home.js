import React from 'react';
import Carrousel from '../carousel/Carousel';
import Header from '../header/Header';
import Body from '../body/Body';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Carrousel/>
    </div>
  )
}
