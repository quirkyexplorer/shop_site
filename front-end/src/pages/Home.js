import React from 'react';
import Carrousel from '../carousel/Carousel';
import Header from '../header/Header';
import Body from '../body/Body';
import EditPage from './EditPage';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <h2 style={{textAlign: 'center'}}>
        Welcome to home page
      </h2>
      <Body></Body>
      <Carrousel></Carrousel>
    </div>
  )
}
