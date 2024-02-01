import React from 'react';
import s from './RickAndMortyCharacter.module.css';

const RickAndMortyCharacter = ({character}) => {
    return (
        <div className={s.wrapper}>
            <img src={character.image} alt={character.name}/>
            <p>Name: {character.name}, gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
        </div>
    );
};

export default RickAndMortyCharacter;
