import React from 'react';
import { Header } from './Header';
import { Carousel } from './Carousel';
import { TopRatedPhotos } from "./TopRatedPhotos"
import { Footer } from './Footer';
import { AboutMe } from './AboutMe';

export function Main() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutMe />
      <TopRatedPhotos />
      <Footer />
    </>
  )
}