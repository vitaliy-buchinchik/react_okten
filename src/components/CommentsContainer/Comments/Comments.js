import React from 'react';

import Comment from "../Comment";
import s from './Comments.module.css';

const Comments = ({comments}) => {
    return (
        <div className={s.comments}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;
