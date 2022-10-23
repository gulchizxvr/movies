import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"
import {useSearchParams} from "react-router-dom";



const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies, error,request} = useSelector(state => state.movieReducer)


    const [query, setQuery] = useSearchParams()

    let page = query.get('page')
    let genre = query.get('genre')
    let value = query.get('search')


    useEffect(() => {
        dispatch(movieActions.getGenres())
        if (genre) {
            dispatch(movieActions.getMoviesWithGenre({genre,page}))
        }
        else if(value)
        {
            dispatch(movieActions.getMoviesSearch({value,page}))
        }
        else{
            dispatch(movieActions.getMoviesData({page}))
        }
    }, [page,value,genre])


    const {results} = movies
    console.log(results);
    return (
        <div className={css.cardWrap}>
            {results ? (results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)): null}
        </div>

    );
};

export {MoviesList}