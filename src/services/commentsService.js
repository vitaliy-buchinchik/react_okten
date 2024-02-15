import {jsonAPIService} from "./apiServices/jsonAPIService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => jsonAPIService.get(urls.comments),
    create: (data) => jsonAPIService.post(urls.comments, data)
}

export {
    commentsService
}
