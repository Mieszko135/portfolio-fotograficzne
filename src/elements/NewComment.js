import React, { useState } from 'react';
import { collection, addDoc} from "firebase/firestore";
import db from ".././firebase";

export function NewComment( {commentId} ) {
    const [values, setValues] = useState({nick: "", newComment: ""});

    function handleChange(e) {
        const {name, value} = e.target;

        setValues(prevValues => {
            return {
                ...prevValues, 
                [name]: value
            }
        });
    }

    const postComment = async (e) => {
        e.preventDefault();
        const collectionRef = collection(db, "Comments");
        const payload = { nick: values.nick, comment: values.newComment, id: commentId};
        await addDoc(collectionRef, payload);
        setValues({nick: "", newComment: ""})
    }

    return (
        <form onSubmit={postComment} className="comments-form" onClick={(e) => e.stopPropagation()}>
            <div className="nick-responsive"><input type="text" name="nick" className="nick-textarea" value={values.nick} onChange={handleChange} placeholder="Nick"/></div>
            <div className="comment-responsive"><textarea name="newComment" className="new-comment-textarea" value={values.newComment} onChange={handleChange} cols="32" rows="6" maxLength="200" style={{resize: "none"}} placeholder="Komentarz..."/></div>
            <span className="characters-counter">{200 - values.newComment.length} / 200</span>
            <input type="submit" className="new-message-btn" value="Wyślij"/>
        </form>
    )
}