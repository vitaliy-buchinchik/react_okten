import React from 'react';

import s from './Comment.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={s.comment}>
            <div>Post Id: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;
