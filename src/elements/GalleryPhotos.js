import React, { useState, useEffect } from "react";
import { collection, getDocs} from "firebase/firestore";
import db from ".././firebase";
import { AllComments } from "./AllComments";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

export function GalleryPhotos() {

    const [state, setState] = useState("popup hidden");
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [photos, setPhotos] = useState([]);
    const [commentId, setCommentId] = useState("");

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className="hamburger-comments" size="40px" color="orangered" onClick={(e) => {        
        e.stopPropagation();
        setOpen(!open);
    }}/>;

    const closeIcon = <CgCloseO className="close-comments" size="40px" color="orangered" onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
    }}/>

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
                    setCommentId(photo.id);
                }}/>
            })}
            <div className={state} onClick={() => {
                setState("popup hidden");
            }}>
                <img src={imgSrc} alt={imgAlt} className="popup__img" onClick={(e) => {
                    e.stopPropagation()
                }}/>
                <div className="comments-section">
                    {open ? closeIcon : hamburgerIcon}
                    {open &&
                    <AllComments commentId = {commentId}/>
                    }
                </div>
            </div>
        </section>
    )
}