import React, { useState, useEffect } from "react";
import { collection, getDocs} from "firebase/firestore";
import db from ".././firebase";

export function GalleryPhotos() {

    const [state, setState] = useState("popup hidden");
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "Photo Gallery")).then((snapshot) => {
            setPhotos(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);
 
    return (
        <section className="all-photos-gallery">
            {photos.map((photo, index) => {
                return <img className="gallery-photo" key={index} src={photo.src} alt={photo.alt} onClick={() => {
                    setState("popup");
                    setImgSrc(photo.src);
                    setImgAlt(photo.alt);
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