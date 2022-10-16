import React from 'react';

import css from './MovieListCard.module.css'
import {baseURL} from "../../config";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";


const MoviesListCard = ({movie}) => {


    const {title, overview, poster_path, genre_ids} = movie


    // ***
    let navigate = useNavigate()
    const somesth = () => {
        navigate("/ppp")
    }
    // ****

    // ***

    const {genres: t} = useSelector(state => state.movieReducer)
    const array = t.genres

    const res = array ? (array.forEach(value=> console.log(value.id))): null
    console.log(res);


    // ***
    return (
        <div className={css.card} onClick={somesth}>
            <h3>{title}</h3>
            <img src={"https://image.tmdb.org/t/p/w300" + poster_path}/>
            <p>{overview}</p>


            <div>


            </div>

        </div>
    );
};

export {MoviesListCard}