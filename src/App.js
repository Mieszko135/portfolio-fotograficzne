import './App.scss';
import { Carousel } from './elements/Carousel';
import { Header } from './elements/Header';
import { CarouselData } from './elements/CarouselData';

function App() {
  return (
    <>
      <Header />
      <Carousel slides={CarouselData}/>
    </>
  )
}

export default App;
