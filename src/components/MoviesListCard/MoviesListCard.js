import React from 'react';

import css from './MovieListCard.module.css'
import {baseURL} from "../../config";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";


const MoviesListCard = ({movie}) => {


    const {title, overview, poster_path, genre_ids, id} = movie


    // ***
    let navigate = useNavigate()
    const somesth = () => {
        navigate("/ppp")
    }
    // ****

    // ***

    const {genres: t} = useSelector(state => state.movieReducer)
    const array = t.genres ? t.genres : []
    const genreOfMovie= []


    for (const genre of genre_ids) {
        for (const gen of array) {
            if (genre === gen.id){
                genreOfMovie.push(gen.name);
            }
        }
    }
    console.log(genreOfMovie);

    // ***
    return (
        <div className={css.card} onClick={somesth}>
            <h3>{title}</h3>
            <img src={"https://image.tmdb.org/t/p/w300" + poster_path}/>
            <p>{overview}</p>
            <h4>{JSON.stringify(genreOfMovie)}</h4>


            <div>


            </div>

        </div>
    );
};

export {MoviesListCard}