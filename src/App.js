import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Main } from "./elements/Main";
import { Gallery } from "./elements/Gallery";
import { GalleryBeforeAfter } from "./elements/GalleryBeforeAfter";
import { Contact } from "./elements/Contact";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallerybeforeafter" element={<GalleryBeforeAfter />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
}

export default App;