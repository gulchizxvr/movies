import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import {Rating} from "@mui/material";
import '@coreui/coreui/dist/css/coreui.min.css'

import {Badge} from "../Badge/Badge";
import {movieActions} from "../../redux";


const MoviesListCard = ({movie}) => {

    const {theme} = useSelector(state => state.themeReducer)
    const {genres} = useSelector(state => state.genreReducer)

    const {title, poster_path, genre_ids, id, vote_average} = movie

    const genreOfMovie = []

    const dispatch = useDispatch();

    genres.forEach((item) => {
        if (genre_ids.includes(item.id)) {
            genreOfMovie.push(item.name)
        }
    })

    let navigate = useNavigate()

    const toDetails = () => {
        navigate(`/${id}`)
        dispatch(movieActions.selectMovie())
    }

    return (
        <div className={`${css.card} ${theme === 'light' ? css.light : css.dark}`} onClick={toDetails}>

            <div className={css.poster}>
                {(poster_path) ? <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={poster_path}/>  :
                    <div className={css.errorPoster}>
                        <h2>Error image</h2></div>}
            </div>

            <div className={css.badge}>
                {genreOfMovie.map((genre, index) => <Badge genre={genre} key={index}/>)}
            </div>
            <div className={css.text}><h4>{title}</h4></div>
            {vote_average && <Rating value={vote_average} precision={0.1} max={10} readOnly/>}
            {vote_average}
        </div>
    );
}

export {MoviesListCard}