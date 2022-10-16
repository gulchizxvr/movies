import React from 'react';

import css from './MovieListCard.module.css'
import {baseURL} from "../../config";
import {useNavigate} from "react-router-dom";



const MoviesListCard = ({movie}) => {



    const {title,overview, poster_path} = movie



    // ***
    let navigate = useNavigate()
    const somesth = () => {
        navigate("/ppp")
    }
    // ****



    return (
        <div className={css.card} onClick={somesth}>
            <h3>{title}</h3>
            <img src={"https://image.tmdb.org/t/p/w300"+poster_path} />
            <p>{overview}</p>



        </div>
    );
};

export {MoviesListCard}