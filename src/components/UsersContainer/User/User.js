import React from 'react';

import s from './User.module.css';

const User = ({user}) => {
    const {id, name, username, email, phone, company:{name:company}} = user;

    return (
        <div className={s.user}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Company: {company}</div>
        </div>
    );
};

export default User;
