import React from 'react';
import { Header } from './Layout/Header';
import { Carousel } from './Carousel';
import { TopRatedPhotos } from "./galleries/TopRatedPhotos"
import { Footer } from './Layout/Footer';
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