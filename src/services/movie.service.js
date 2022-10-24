
import {axiosService} from "./axios.service";

import {urls} from "../config";

const movieService = {
    getMovies : (page)=> axiosService.get(urls.getMovies, {params:{page}}),
    getGenre : () => axiosService.get(urls.getGenre),
    getMovie : (id) => axiosService(`${urls.getMovie}/${id}`),
    getMoviesGenre: (genre,page) => axiosService(urls.getMovies, {params:{with_genres:genre,page}}),
    getSearchedMovies: (value,page) => axiosService(urls.findMovies, {params:{query:value,page}}),
    getInfo: ()=> axiosService.get(urls.getInfo)
}

export {movieService}