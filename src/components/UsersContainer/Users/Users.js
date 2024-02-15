import React from 'react';

import User from "../User";
import s from './Users.module.css';

const Users = ({users}) => {
    return (
        <div className={s.users}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
