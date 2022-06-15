import React, { useState } from 'react';
import { collection, addDoc} from "firebase/firestore";
import db from ".././firebase";

export function NewComment( {commentId} ) {
    const [values, setValues] = useState({nick: "", newComment: "", rate: ""});

    // const [rate, setRate] = useState(1)

    // function rateChange(e) {
    //     setRate(e.target.value);
    //     console.log(rate);
    // }

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
        const payload = { nick: values.nick, comment: values.newComment, id: commentId, rate: Number(values.rate)};
        await addDoc(collectionRef, payload);
        setValues({nick: "", newComment: "", rate: ""})
    }

    return (
        <form onSubmit={postComment} className="comments-form" onClick={(e) => e.stopPropagation()}>
            <div className="nick-responsive"><input type="text" name="nick" className="nick-textarea" value={values.nick} onChange={handleChange} placeholder="Nick"/></div>
            <div className="comment-responsive"><textarea name="newComment" className="new-comment-textarea" value={values.newComment} onChange={handleChange} cols="32" rows="6" maxLength="200" style={{resize: "none"}} placeholder="Komentarz..."/></div>
            <span className="characters-counter">{200 - values.newComment.length} / 200</span>
            <div className="ratings-container">Oceń zdjęcie:
            <select name="rate" value={values.rate} onChange={handleChange} className="photo-rating">
                <option value={""}>Brak oceny</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select></div>
            <input type="submit" className="new-message-btn" value="Wyślij"/>
        </form>
    )
}