
import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getMovie : (page=1)=> axiosService.get(urls.getMovie, {params:{page}}),
    getGenre : () => axiosService.get(urls.getGenre)
}

export {movieService}