import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies, error} = useSelector(state => state.movieReducer)


    const [query, setQuery] = useSearchParams()

    let x = query.get('page')
    let y = query.get('genre')
    let z = query.get('search')


    useEffect(() => {
        dispatch(movieActions.getGenres())
        if (y) {
            dispatch(movieActions.getMoviesWithGenre({y,x}))
        }
        else{
            dispatch(movieActions.getMoviesData({x}))
        }
    }, [y,x])


    const {results} = movies

    return (
        <div className={css.cardWrap}>
            {results ? results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>) : null}
        </div>

    );
};

export {MoviesList}