import {carsAPIService} from "./apiServices/carsAPIService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => carsAPIService.get(urls.cars.base),
    create: (data) => carsAPIService.post(urls.cars.base, data),
    updateById: (id, data) => carsAPIService.put(urls.cars.byId(id), data),
    deleteById: (id) => carsAPIService.delete(urls.cars.byId(id))
}

export {
    carsService
}
