import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../../services/commentsService";
import s from './CommentForm.module.css';

const CommentForm = ({setComments}) => {
    const {
        reset,
        register,
        handleSubmit
    } = useForm();

    const saveComment = (comment) => {
        commentsService.create(comment).then(({data}) => setComments(prev => [data, ...prev]));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveComment)} className={s.form}>
                <input className={s.input} type="text" placeholder={'post Id'} {...register('postId')}/>
                <input className={s.input} type="text" placeholder={'id'} {...register('id')}/>
                <input className={s.input} type="text" placeholder={'name'} {...register('name')}/>
                <input className={s.input} type="text" placeholder={'email'} {...register('email')}/>
                <input className={s.input} type="text" placeholder={'body'} {...register('body')}/>
                <button className={s.btn}>Save comment</button>
            </form>
        </div>
    );
};

export default CommentForm;
