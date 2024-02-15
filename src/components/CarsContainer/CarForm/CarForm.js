import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {carsService} from "../../../services/carsService";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {isValid, errors},
        setValue
    } = useForm({
        mode: 'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
            setCarForUpdate(prev => !prev)
        }
    }, [carForUpdate]);
    const save = async (car) => {
        await carsService.create(car)
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'min 1 max 2 character'
                }
            })}/>
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1_000_000, message: 'max 1 000 000'}
            })}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'min 1990'},
                max: {value: new Date().getFullYear(), message: 'max current year'}
            })}/>
            <button disabled={!isValid}>save</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export default CarForm;