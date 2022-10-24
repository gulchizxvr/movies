import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";


import css from "./MovieList.module.css"

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, error, loading} = useSelector(state => state.movieReducer)
    const {theme} = useSelector(state => state.themeReducer)

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

    }, [page, value, genre, dispatch])

    const {results} = movies


    if (!loading && results?.length <= 0) {

        return <div className={`${css.errorPoster} ${theme === 'light' ? css.light : css.dark}`}>
            <h1>No movies matching your search</h1>
        </div>
    }


    return (
        <div className={css.listWrap}>

            {loading ? <div className={`${css.state} ${theme === 'light' ? css.light : css.dark}`}><h2>Loading....</h2>
            </div> : null}
            {error ?
                <div className={`${css.state} ${theme === 'light' ? css.light : css.dark}`}><h2>Error</h2></div> : null}

            <div className={css.cardWrap}>
                {results ? (results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)) : null}

            </div>
        </div>

    );
};

export {MoviesList}