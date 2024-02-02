import React from 'react';

import s from './RickAndMortyCharacter.module.css';

const RickAndMortyCharacter = ({character}) => {
    const {name, gender, species, status, image} = character;

    return (
        <div className={s.wrapper}>
            <img src={image} alt={name}/>
            <p>Name: {name}, gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default RickAndMortyCharacter;
