import React, {useEffect, useState} from 'react';

import {carsService} from "../../../services/carsService";
import CarForm from "../CarForm";
import Cars from "../Cars";

const CarsWrapper = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <h2>Cars</h2>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarsWrapper;
