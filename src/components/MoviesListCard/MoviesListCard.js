import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import {Badge} from "../Badge/Badge";
import {Rating} from "@mui/material";
import {movieActions} from "../../redux";




const MoviesListCard = ({movie}) => {
    const {title, overview, poster_path, genre_ids,id, vote_average} = movie

    const {genres} = useSelector(state => state.genreReducer)

    const genreOfMovie= []

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
        <div className={css.card} onClick={toDetails}>


            <div className={css.poster}>
                <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={"error with image"}/>
            </div>

            <div className={css.badge}>
                {genreOfMovie.map((genre,index) => <Badge genre={genre} key={index}/>)}
            </div>
            <div className={css.text}><h4>{title}</h4></div>
            <Rating value={vote_average} precision={0.1} max={10} readOnly/>
            {vote_average}

        </div>
    );
}

export {MoviesListCard}