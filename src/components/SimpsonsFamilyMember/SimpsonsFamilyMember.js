import React from 'react';
import styles from './SimpsonsFamilyMember.module.css';

const SimpsonsFamilyMember = ({simpson}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{simpson.name} {simpson.surname}</h2>
            <p className={styles.age}>Вік: {simpson.age}</p>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name} className={styles.img}/>
        </div>
    );
};

export default SimpsonsFamilyMember;
