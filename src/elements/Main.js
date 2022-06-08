import React from 'react';
import { Header } from './Header';
import { Carousel } from './Carousel';
import { CarouselData } from './CarouselData';
import { TopRatedPhotos } from "./TopRatedPhotos"
import { Footer } from './Footer';
import { AboutMe } from './AboutMe';

export function Main() {
  return (
    <>
      <Header />
      <Carousel slides={CarouselData}/>
      <AboutMe />
      <TopRatedPhotos />
      <Footer />
    </>
  )
}