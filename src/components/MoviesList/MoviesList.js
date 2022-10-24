import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import css from "./MovieList.module.css"
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies, error, loading} = useSelector(state => state.movieReducer)


    const [query, setQuery] = useSearchParams()

    let page = query.get('page')
    let genre = query.get('genre')
    let value = query.get('search')


    useEffect(() => {
        dispatch(movieActions.selectMovie(true))
        if (genre) {
            dispatch(movieActions.getMoviesWithGenre({genre, page}))
        } else if (value) {
            dispatch(movieActions.getMoviesSearch({value, page}))
        } else {
            dispatch(movieActions.getMoviesData({page}))
        }

    }, [page, value, genre,dispatch])

    const {results} = movies


    if (!loading && results?.length<=0) {

        return <div className={css.errorPoster}>
            <h1>No movies matching your search</h1>
        </div>
    }


    return (
        <div className={css.listWrap}>

            {loading ? <h2>Loading</h2> : null}
            {error ? <h2>Error</h2> : null}

            <div className={css.cardWrap}>
                {results ? (results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)) : null}

            </div>
        </div>

    );
};

export {MoviesList}