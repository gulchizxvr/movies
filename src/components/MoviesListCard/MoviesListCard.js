import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import {CBadge, CButton} from "@coreui/react";



const MoviesListCard = ({movie}) => {


    const {title, overview, poster_path, genre_ids,id} = movie


    // ***
    let navigate = useNavigate()
    const somesth = () => {
        navigate(`/${title}`)
    }
    // ****

    // ***

    const {genres: t} = useSelector(state => state.movieReducer)
    const array = t.genres ? t.genres : []
    const genreOfMovie= []

     array.map((item) => {
        if (genre_ids.includes(item.id)) {
           genreOfMovie.push(item.name)
       }
    })

    // ***
    return (
        <div className={css.card} onClick={somesth}>
            <h3>{title}</h3>
            <img src={"https://image.tmdb.org/t/p/w300" + poster_path}/>
            <p>{overview}</p>
            <h4>{JSON.stringify(genreOfMovie)}</h4>
        </div>
    );
};

export {MoviesListCard}