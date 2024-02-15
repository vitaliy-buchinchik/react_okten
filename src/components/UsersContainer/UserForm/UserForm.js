import React from 'react';
import {useForm} from "react-hook-form";

import {usersService} from "../../../services/usersService";
import s from './UserForm.module.css'

const UserForm = ({setUsers}) => {
    const {
        reset,
        register,
        handleSubmit
    } = useForm();

    const saveUser = (user) => {
        usersService.create(user).then(({data}) => setUsers(prev => [data, ...prev]));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(saveUser)} className={s.form}>
            <input className={s.input} type="text" placeholder={'name'} {...register('name')}/>
            <input className={s.input} type="text" placeholder={'username'} {...register('username')}/>
            <input className={s.input} type="text" placeholder={'email'} {...register('email')}/>
            <input className={s.input} type="text" placeholder={'phone'} {...register('phone')}/>
            <input className={s.input} type="text" placeholder={'company'} {...register('company')}/>
            <button className={s.btn}>Save user</button>
        </form>
    );
};

export default UserForm;
