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

    array.forEach((item) => {
        if (genre_ids.includes(item.id)) {
            genreOfMovie.push(item.name)
       }
    })

    let navigate = useNavigate()

    const toDetails = () => {
        navigate(`/${id}`)
    }

    return (
        <div className={css.card} onClick={toDetails}>


            <img src={"https://image.tmdb.org/t/p/w300" + poster_path}/>
            <div className={css.badge}>
                {genreOfMovie.map(genre => <Badge genre={genre}/>)}
            </div>
            <div className={css.text}><h4>{title}</h4></div>
            <Rating value={vote_average} precision={0.05} max={10} readOnly/>
            {vote_average}
        </div>
    );
}

export {MoviesListCard}