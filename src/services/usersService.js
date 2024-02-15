import {jsonAPIService} from "./apiServices/jsonAPIService";
import {urls} from "../constants/urls";

const usersService = {
    getAll: () => jsonAPIService.get(urls.users),
    create: (user) => jsonAPIService.post(urls.users, user)
}

export {
    usersService
}
