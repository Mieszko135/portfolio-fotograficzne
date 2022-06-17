import React, {useState, useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore";
import db from "../.././firebase";
import { NewComment } from './NewComment';

export function AllComments({commentId}) {

    const [comments, setComments] = useState([]);
    let sumRate = 0;
    let counter = 0;
    let average = 0;

    useEffect(() => {
        getDocs(collection(db, "Comments")).then((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    comments.map((comment) => {
        if (commentId === comment.id) {
            if (comment.rate !== 0) {
                sumRate += Number(comment.rate);
                counter ++;
                average = parseFloat(sumRate / counter).toFixed(2);
            }
            return null
        }
        return average
    })

    return (
        <div className="all-comments-container" onClick={(e) => e.stopPropagation()}>
            {comments.map((comment, index) => {
                if (commentId === comment.id) {
                return  <div className="single-comment" key={index}>
                            <h3 className="nick-comment">Nick: {comment.nick}</h3>
                            <p className="text-comment">{comment.comment}</p>
                        </div>
                }
                return null;
            })}
            <div className="photo-rate">
                Ocena: {average >= 0 ? average : "Brak ocen"}
            </div>
            <NewComment commentId={commentId}/>
        </div>
    )
}