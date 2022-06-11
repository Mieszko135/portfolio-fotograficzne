import React from 'react';

export function NewComment() {
    return (
        <form className="comments-form">
            <div className="nick-responsive"><input type="text" name="nick" className="nick-textarea"/></div>
            <div className="comment-responsive"><textarea name="new-comment" className="new-comment-textarea"/></div>
        </form>
    )
}