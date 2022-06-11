import React from 'react';
import { AllComments } from './AllComments';
import { NewComment } from './NewComment';

export function CommentsSection() {
    return (
        <div className="comments-container">
            <NewComment />
            <AllComments />
        </div>
    )
}