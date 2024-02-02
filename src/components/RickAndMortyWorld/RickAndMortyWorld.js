import React from 'react';

import rickandmorty from "../../data/rickandmorty";
import RickAndMortyCharacter from "../RickAndMortyCharacter";
import s from "./RickAndMortyWorld.module.css";

const RickAndMortyWorld = () => {
    return (
        <>
            <h1 className={s.heading}>Rick and Morty World:</h1>
            <div className={s.wrapper}>
                {
                    rickandmorty.map(character => (
                        <RickAndMortyCharacter
                            character={character}
                            key={character.id}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default RickAndMortyWorld;
