import { Header } from './Header';
import { Carousel } from './Carousel';
import { CarouselData } from './CarouselData';
import { TopRatedPhotos } from "./TopRatedPhotos"
import { Footer } from './Footer';

export function Main() {
  return (
    <>
      <Header />
      <Carousel slides={CarouselData}/>
      <TopRatedPhotos />
      <Footer />
    </>
  )
}