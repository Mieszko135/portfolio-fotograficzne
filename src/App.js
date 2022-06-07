import './App.scss';
import { Carousel } from './elements/Carousel';
import { Header } from './elements/Header';
import { CarouselData } from './elements/CarouselData';
import { TopRatedPhotos } from "./elements/TopRatedPhotos"

function App() {
  return (
    <>
      <Header />
      <Carousel slides={CarouselData}/>
      <TopRatedPhotos />
    </>
  )
}

export default App;
