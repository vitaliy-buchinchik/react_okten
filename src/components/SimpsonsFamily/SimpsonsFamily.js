import React from 'react';

import simpsons from "../../data/simpsons";
import SimpsonsFamilyMember from "../SimpsonsFamilyMember";
import styles from './SimpsonsFamily.module.css';

const SimpsonsFamily = () => {
    return (
        <>
            <h1 className={styles.heading}>Simpsons family:</h1>

            <div className={styles.family}>
                {
                    simpsons.map(simpson => (
                        <SimpsonsFamilyMember
                            simpson={simpson}
                            key={simpson.id}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default SimpsonsFamily;
