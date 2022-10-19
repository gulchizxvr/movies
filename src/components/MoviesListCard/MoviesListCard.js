import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import {Badge} from "../Badge/Badge";
import {Rating} from "@mui/material";




const MoviesListCard = ({movie}) => {
    console.log(movie);
    const {title, overview, poster_path, genre_ids,id, vote_average} = movie

    const {genres: data} = useSelector(state => state.movieReducer)


    const array = data.genres ? data.genres : []
    const genreOfMovie= []

    array.map((item) => {
        if (genre_ids.includes(item.id)) {
            genreOfMovie.push(item.name)
       }
        return null
    })

    let navigate = useNavigate()

    const toDetails = () => {
        navigate(`/${id}`)
    }

    return (
        <div className={css.card} onClick={toDetails}>


            <div className={css.text}><h4>{title}</h4></div>
            <img src={"https://image.tmdb.org/t/p/w300" + poster_path}/>
            <div className={css.badge}>
                {genreOfMovie.map(genre => <Badge genre={genre}/>)}
            </div>
            <Rating value={vote_average/2} precision={0.5} readOnly/>
        </div>
    );
}

export {MoviesListCard}