import axios from "axios";

import {carsBaseURL} from "../../constants/urls";

const carsAPIService = axios.create({baseURL: carsBaseURL});

export {
    carsAPIService
}
