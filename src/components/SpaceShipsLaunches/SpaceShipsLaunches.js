import React, {useEffect, useState} from 'react';
import axios from "axios";

import SpaceShip from "../SpaceShip";
import s from './SpaceShipsLaunches.module.css';

const SpaceShipsLaunches = () => {
    const [spaseShips, setSpaseShips] = useState([])

    const spaceShipsURL = 'https://api.spacexdata.com/v3/launches/';

    useEffect(() => {
        axios.get(spaceShipsURL).then(({data}) => setSpaseShips(data))
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
