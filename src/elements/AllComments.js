import React, {useState, useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore";
import db from ".././firebase";
import { NewComment } from './NewComment';

export function AllComments({commentId}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "Comments")).then((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    return (
        <div className="all-comments-container" onClick={(e) => e.stopPropagation()}>
            {comments.map((comment, index) => {
                if (commentId === comment.id) {
                return  <div className="single-comment" key={index}>
                            <h3 className="nick-comment">{comment.nick}</h3>
                            <p className="text-comment">{comment.comment}</p>
                        </div>
                }
                return null;
            })}
            <NewComment commentId={commentId}/>
        </div>
    )
}