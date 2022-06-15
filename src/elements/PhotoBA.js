import React, {useState, useEffect} from "react";
import { collection, getDocs} from "firebase/firestore";
import db from ".././firebase";

export function PhotoBA() {

    const [value, setValue] = useState(50);
    const [photos, setPhotos] = useState([]);
    const [beforePhoto, setBeforePhoto] = useState("https://firebasestorage.googleapis.com/v0/b/portfolio-foto.appspot.com/o/BeforeAfterPhotos%2Fbefore-warszawa.jpg?alt=media&token=effceeca-92f0-4611-b490-43597e98b8e3");
    const [afterPhoto, setAfterPhoto] = useState("https://firebasestorage.googleapis.com/v0/b/portfolio-foto.appspot.com/o/BeforeAfterPhotos%2Fafter-warszawa.jpg?alt=media&token=ce106552-c7a0-4788-a7d9-20dac048e749");

    useEffect(() => {
        getDocs(collection(db, "BeforeAfterPhotos")).then((snapshot) => {
            setPhotos(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    return (
        <>
        <section className="ba-main-section">
            <h2 className="ba-header">Wybierz zdjęcie:</h2>
            <div className="all-ba-photos">
                {photos.map((photo, index) => {
                    return <div className="after-img-box" key={index}><img src={photo.urlAfter} alt={photo.alt} className="after-img" onClick={() => {
                        setBeforePhoto(photo.urlBefore)
                        setAfterPhoto(photo.urlAfter)
                    }}/></div>
                })}
            </div>
            <div className="photo-container">
                <div className="img background-img" style={{backgroundImage: `url(${beforePhoto})`}}></div>
                <div className="img foreground-img" style={{width: value+"%", backgroundImage: `url(${afterPhoto})`}}></div>
                <input type="range" min="1" max="100" value={value} onChange={(e) => setValue(e.target.value)} className="before-after-slider" name='slider' id="slider"></input>
            </div>
        </section>
        </>  
    )
}