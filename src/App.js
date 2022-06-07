import './App.scss';
import { Carousel } from './elements/Carousel';
import { Header } from './elements/Header';
import { CarouselData } from './elements/CarouselData';
import { TopRatedPhotos } from "./elements/TopRatedPhotos"
import { Footer } from './elements/Footer';

function App() {
  return (
    <>
      <Header />
      <Carousel slides={CarouselData}/>
      <TopRatedPhotos />
      <Footer />
    </>
  )
}

export default App;
