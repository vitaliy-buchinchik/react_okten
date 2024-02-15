import React, {useEffect, useState} from 'react';

import {usersService} from "../../../services/usersService";
import UserForm from "../UserForm";
import Users from "../Users";
import s from './UsersWrapper.module.css'

const UsersWrapper = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);
    
    return (
        <div className={s.wrapper}>
            <h1 className={s.heading}>User creating:</h1>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export default UsersWrapper;
