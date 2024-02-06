import React from 'react';

import s from './SpaceShip.module.css';

const SpaceShip = ({spaceShip}) => {

    const missionName = spaceShip['mission_name'];
    const launchYear = spaceShip['launch_year'];
    const imgSource = spaceShip.links['mission_patch_small'];

    return (
        <div className={s.ship_wrapper}>
            <div>Mission Name: {missionName}</div>
            <div>Launch Year: {launchYear}</div>
            <img src={imgSource} alt={missionName}/>
        </div>
    );
};

export default SpaceShip;
