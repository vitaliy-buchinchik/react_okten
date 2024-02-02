import React from 'react';

import styles from './SimpsonsFamilyMember.module.css';

const SimpsonsFamilyMember = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{name} {surname}</h2>
            <p className={styles.age}>Вік: {age}</p>
            <p>{info}</p>
            <img src={photo} alt={name} className={styles.img}/>
        </div>
    );
};

export default SimpsonsFamilyMember;
