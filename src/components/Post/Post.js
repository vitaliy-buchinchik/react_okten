import React from 'react';

import s from './Post.module.css';

const Post = ({post, getCurrentPost}) => {
    const {id, title} = post;

    return (
        <div>
            {id}) {title}
            <button
                className={s.button}
                onClick={() => getCurrentPost(post)}
            >
                Post Details
            </button>
        </div>
    );
};

export default Post;
