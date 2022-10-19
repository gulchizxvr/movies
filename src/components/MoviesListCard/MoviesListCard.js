import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import {CBadge} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'




const MoviesListCard = ({movie}) => {
    const {title, overview, poster_path, genre_ids,id} = movie

    const {genres: data} = useSelector(state => state.movieReducer)


    const array = data.genres ? data.genres : []
    const genreOfMovie= []

    array.map((item) => {
        if (genre_ids.includes(item.id)) {
            genreOfMovie.push(item.name)
       }
    })

    let navigate = useNavigate()

    const toDetails = () => {
        navigate(`/${id}`)
    }




    // ***
    return (
        <div className={css.card} onClick={toDetails}>




            <CBadge color="danger" shape="rounded-pill">
                <h7 >{JSON.stringify(genreOfMovie)}</h7>
            </CBadge>
            <h3>{title}</h3>
            <img src={"https://image.tmdb.org/t/p/w300" + poster_path}/>
        </div>
    );
}

export {MoviesListCard}