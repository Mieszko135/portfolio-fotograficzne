import React, {useState, useEffect} from 'react';
// import { collection, getDocs} from "firebase/firestore";
// import db from ".././firebase";

export function DayPhoto() {

    // const [photos, setPhotos] = useState([]);
    // const [comments, setComments] = useState([]);
    // let sumRate = 0;
    // let counter = 0;
    // let average = 0;
    // let newArr = [];

    // useEffect(() => {
    //     getDocs(collection(db, "Comments")).then((snapshot) => {
    //         setComments(snapshot.docs.map((doc) => doc.data()))
    //     })
    // }, []);

    // useEffect(() => {
    //     getDocs(collection(db, "Photo Gallery")).then((snapshot) => {
    //         setPhotos(snapshot.docs.map((doc) => doc.data()))
    //     })
    // }, []);

    // comments.map((comment) => {
    //     if (commentId === comment.id) {
    //         if (comment.rate !== 0) {
    //             sumRate += Number(comment.rate);
    //             counter ++;
    //         }
    //         return null
    //     }
    //     return average = parseFloat(sumRate / counter).toFixed(2);
    // })

    return (
        <div className="top-photo">
            <img className="top-photo__image" src="./database/antonov.jpg" alt="antonov"/>
            <span className="top-text">I Miejsce</span>
            <img className="top-photo__image" src="./database/antonov.jpg" alt="antonov"/>
            <span className="top-text">II Miejsce</span>
            <img className="top-photo__image" src="./database/antonov.jpg" alt="antonov"/>
            <span className="top-text">III Miejsce</span>
        </div>
    )
}