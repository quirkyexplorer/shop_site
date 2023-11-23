import React from 'react';
import Carrousel from '../carousel/Carousel';
import Header from '../header/Header';
import Body from '../body/Body';

export default function Home() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>
        Welcome to home page
      </h2>
      <Header></Header>
      <Body></Body>
      <Carrousel></Carrousel>
    </div>
  )
}
