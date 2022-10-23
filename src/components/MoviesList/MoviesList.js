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

    }, [page, value, genre])


    const {results} = movies
    if (!loading && results?.length<=0) {
        return <div>
            <h1>its all</h1>
        </div>
    }


    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>

            {loading ? <h2>Завантаження</h2> : null}
            {error ? <h2>Сталася помилка</h2> : null}

            <div className={css.cardWrap}>
                {results ? (results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)) : null}

            </div>
        </div>

    );
};

export {MoviesList}