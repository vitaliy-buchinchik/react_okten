import React, {useEffect, useState} from 'react';

import {commentsService} from "../../../services/commentsService";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import s from './CommentsWrapper.module.css';

const CommentsWrapper = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div className={s.wrapper}>
            <h2 className={s.heading}>Comment creating:</h2>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsWrapper;
