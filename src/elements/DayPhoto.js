import React, {useState, useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore";
import db from ".././firebase";

export function DayPhoto() {

    const [photos, setPhotos] = useState([]);
    const [avRate, setAvRate] = useState([]);
    // const [comments, setComments] = useState([]);
    // let sumRate = 0;
    // let counter = 0;
    // let average = 0;
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

    // avRate.map((rate) => {
    //     if (rate.rate === sortArr[0]) {
    //         photos.map((photo) => {
    //             if (photo.id === rate.id) {
    //                 return firstSrc = photo.src
    //             }
    //             return null
    //         })
    //     }
    //     if (rate.rate === sortArr[1]) {
    //         photos.map((photo) => {
    //             if (photo.id === rate.id) {
    //                 return secondSrc = photo.src
    //             }
    //             return null
    //         })
    //     }
    //     if (rate.rate === sortArr[2]) {
    //         photos.map((photo) => {
    //             if (photo.id === rate.id) {
    //                 return thirdSrc = photo.src
    //             }
    //             return null
    //         })
    //     }
    //     return null
    // })

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