import React from 'react';
import Carrousel from '../carousel/Carousel';
import Navigation from '../navigation/Navigation';
import Body from '../body/Body';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Carrousel/>
    </div>
  )
}
