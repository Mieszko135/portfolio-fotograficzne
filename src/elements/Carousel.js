import React, {useState, useEffect} from 'react';

import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { collection, getDocs} from "firebase/firestore";
import db from ".././firebase";

export function Carousel() {

    const [photos, setPhotos] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(0);
    const length = photos.length;

    useEffect(() => {
        getDocs(collection(db, "Photo Gallery")).then((snapshot) => {
            setPhotos(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    const nextSlide = () => {
        setCurrentPosition(currentPosition === length - 1 ? 0 : currentPosition + 1)
    }

    const prevSlide = () => {
        setCurrentPosition(currentPosition === 0 ? length - 1 : currentPosition - 1)
    }

    if(!Array.isArray(photos) || photos.length <= 0) {
        return null
    }

    return (
        <section className="carousel-container container">
            <BiChevronLeftCircle className="carousel__arrow carousel__arrow-left" onClick={prevSlide}/>
            <BiChevronRightCircle className="carousel__arrow carousel__arrow-right" onClick={nextSlide}/>
            {photos.map((slide, index) => {
                return (
                    <div className={index === currentPosition ? "slide active" : "sldie"} key={index}>
                        {index === currentPosition && (
                            <img src={slide.src} alt={slide.alt} className="carousel__image"/>
                        )}
                    </div>
                )
            })}
        </section>
    );
}