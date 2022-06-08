import React, { useState } from "react";
import { CarouselData } from "./CarouselData";

export function GalleryPhotos() {

    const [state, setState] = useState("popup hidden");
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");
 
    return (
        <section className="all-photos-gallery">
            {CarouselData.map((photo, index) => {
                return <img key={index} src={photo.image} alt={photo.alt} onClick={() => {
                    setState("popup");
                    setImgSrc(photo.image);
                    setImgAlt(imgAlt);
                }}/>
            })}
            <div className={state} onClick={() => {
                setState("popup hidden");
            }}>
                <img src={imgSrc} alt={imgAlt} className="popup__img" onClick={(e) => {
                    e.stopPropagation()
                }}/>
            </div>
        </section>
    )
}