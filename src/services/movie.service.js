
import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getMovies : (page)=> axiosService.get(urls.getMovies, {params:{page}}),
    getGenre : () => axiosService.get(urls.getGenre),
    getMovie : (id) => axiosService(`${urls.getMovie}/${id}`),
    getMoviesGenre: (y,page) => axiosService(urls.getMovies, {params:{with_genres:y,page}}),
    getSearchedMovies: (value,page) => axiosService(urls.findMovies, {params:{query:value},page})
}

export {movieService}