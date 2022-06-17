import React, { useState, useEffect } from 'react';
import { collection, addDoc, setDoc, doc, getDocs} from "firebase/firestore";
import db from "../.././firebase";
import { validate } from "../validate";

export function NewComment( {commentId} ) {
    const [values, setValues] = useState({nick: "", newComment: "", rate: ""});
    const [errorMessages, setErrorMessages] = useState(null);

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
    
    const updateDoc = async (id) => {
        const docRef = doc(db, "Ratings", id);
        const payload = { id: id, rate: Number(average)};

        setDoc(docRef, payload)
    }

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

        const errorMessage = validate(values);

        setErrorMessages(errorMessage);

        if (errorMessage) return;

        const collectionRef = collection(db, "Comments");
        const payload = { nick: values.nick, comment: values.newComment, id: commentId, rate: Number(values.rate)};
        await addDoc(collectionRef, payload);
        setValues({nick: "", newComment: "", rate: ""})
    }

    return (
        <form autoComplete="off" onSubmit={postComment} className="comments-form" onClick={(e) => e.stopPropagation()}>
            <div className="error-message" style={{textAlign: "left", marginBottom: "1rem"}}>{errorMessages?.nick}</div>
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
            <input type="submit" className="new-message-btn" value="Wyślij" onClick={() => updateDoc(commentId)}/>
        </form>
    )
}