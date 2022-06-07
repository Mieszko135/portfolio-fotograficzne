import React, {useState} from 'react';
import { CarouselData } from './CarouselData';
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

export function Carousel({slides}) {

    const [currentPosition, setCurrentPosition] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrentPosition(currentPosition === length - 1 ? 0 : currentPosition + 1)
    }

    const prevSlide = () => {
        setCurrentPosition(currentPosition === 0 ? length - 1 : currentPosition - 1)
    }

    //Jeśli baza danych jest pusta karuzela się nie wyświetli

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="carousel-container container">
            <BiChevronLeftCircle className="carousel__arrow carousel__arrow-left" onClick={prevSlide}/>
            <BiChevronRightCircle className="carousel__arrow carousel__arrow-right" onClick={nextSlide}/>
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === currentPosition ? "slide active" : "sldie"} key={index}>
                        {index === currentPosition && (
                            <img src={slide.image} alt={slide.alt} className="carousel__image"/>
                        )}
                    </div>
                )
            })}
        </section>
    );
}