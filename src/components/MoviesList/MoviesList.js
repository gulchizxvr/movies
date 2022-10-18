import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieService} from "../../services";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"



const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies,error,genres} = useSelector(state => state.movieReducer)

    useEffect(()=>
        {
            movieService.getMovies().then(({data})=>{
                dispatch(movieActions.getMoviesData(data))})
            movieService.getGenre().then(({data})=>{
                dispatch(movieActions.getGenresAll(data))
            })
        }
        ,[])

    const {results}=movies
 

    return (
        <div className={css.cardWrap}>
            {results ? results.map(movie=> <MoviesListCard key={movie.id} movie={movie}/>) : null }
        </div>
    );
};

export {MoviesList}