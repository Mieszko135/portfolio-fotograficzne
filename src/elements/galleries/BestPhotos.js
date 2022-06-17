import React, {useState, useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore";
import db from "../.././firebase";

export function BestPhotos() {

    const [photos, setPhotos] = useState([]);
    const [avRate, setAvRate] = useState([]);
    
    let newArr = [];
    let sortArr = [];
    let filterArr = [];
    let firstSrc = "";
    let secondSrc = "";
    let thirdSrc = "";
    
    useEffect(() => {
        getDocs(collection(db, "Photo Gallery")).then((snapshot) => {
            setPhotos(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);
    
    useEffect(() => {
        getDocs(collection(db, "Ratings")).then((snapshot) => {
            setAvRate(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    avRate.map((rate) => {
        newArr.push(rate.rate)
        sortArr = newArr.sort((a,b) => b - a)
        filterArr = sortArr.filter((value, index) => sortArr.indexOf(value) === index)
        return filterArr;
    })

    avRate.map((rate) => {
        return photos.map((photo) => {
            if (rate.rate === filterArr[0]) {
                if (photo.id === rate.id) {
                    return firstSrc = photo.src
                }
            }
            if (rate.rate === filterArr[1]) {
                if (photo.id === rate.id) {
                    return secondSrc = photo.src
                }
            }
            if (rate.rate === filterArr[2]) {
                if (photo.id === rate.id) {
                    return thirdSrc = photo.src
                }
            }
            return null
        })
    })

    return (
        <div className="top-photo">
            <img className="top-photo__image" src={firstSrc} alt="antonov"/>
            <span className="top-text">I Miejsce</span>
            <img className="top-photo__image" src={secondSrc} alt="antonov"/>
            <span className="top-text">II Miejsce</span>
            <img className="top-photo__image" src={thirdSrc} alt="antonov"/>
            <span className="top-text">III Miejsce</span>
        </div>
    )
}