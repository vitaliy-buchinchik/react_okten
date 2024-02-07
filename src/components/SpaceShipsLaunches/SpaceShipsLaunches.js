import React, {useEffect, useState} from 'react';

import SpaceShip from "../SpaceShip";
import s from './SpaceShipsLaunches.module.css';
import {launchService} from "../../services/launchService";

const SpaceShipsLaunches = () => {
    const [spaseShips, setSpaseShips] = useState([])

    useEffect(() => {
        launchService.getAll().then(({data}) => setSpaseShips(data))
    }, []);

    return (
        <>
            <h1 className={s.heading}>Launches of spaceships every year except 2020</h1>
            <div className={s.wrapper}>
                {
                    spaseShips
                        .filter(spaseShip => parseInt(spaseShip['launch_year']) !== 2020)
                        .map(spaceShip => <SpaceShip key={spaceShip['mission_name']} spaceShip={spaceShip}/>)
                }
            </div>
        </>
    );
};

export default SpaceShipsLaunches;
