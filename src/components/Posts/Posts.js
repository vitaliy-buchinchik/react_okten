import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import Post from "../Post";
import PostDetails from "../PostDetails";
import s from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post)
    }

    return (
        <>
            <h1 className={s.heading}>All posts from JSON Placeholder:</h1>
            <div className={s.wrapper}>
                <div className={s.posts}>
                    {
                        posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)
                    }
                </div>
                <div className={s.details}>
                    {postDetails && <PostDetails postDetails={postDetails}/>}
                </div>
            </div>
        </>
    );
};

export default Posts;
