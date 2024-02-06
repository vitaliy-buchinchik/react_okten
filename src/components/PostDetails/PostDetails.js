import React from 'react';

import s from './PostDetails.module.css';

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;

    return (
        <div className={s.wrapper}>
            <div>
                <strong>User id:</strong> {userId}
            </div>
            <div>
                <strong>Post id:</strong> {id}
            </div>
            <div>
                <strong>Post title:</strong> {title}
            </div>
            <div>
                <strong>Post body:</strong> {body}
            </div>
        </div>
    );
};

export default PostDetails;
