import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {CBadge} from "@coreui/react";

import css from "./MovieDetail.module.css"
import {Rating} from "@mui/material";

const MovieDetail = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getCurrentMovie({id}))
    }, [id, dispatch])

    const {movie} = useSelector(state => state.movieReducer);

    const {
        budget,
        poster_path,
        original_title,
        overview,
        genres,
        production_companies,
        release_date,
        runtime,
        status,
        tagline,
        title,
        vote_average
    } = movie

    return (
        <div className={css.wrap}>
            <div className={css.poster}>
                <img src={"https://image.tmdb.org/t/p/w400" + poster_path}/>
                <div className={css.rating}>
                    <Rating value={vote_average} precision={0.1} max={10} readOnly/>
                    <h5>Rate: {vote_average}</h5>
                </div>

            </div>

            <div className={css.description}>

                <h1>{title}</h1>

                <div className={css.overview}>
                    {genres?.map(genre => <CBadge color="danger"
                                                  shape="rounded-pill" style={{margin: "3px"}}><span>{genre.name}</span></CBadge>)}
                    <h5 style={{marginTop: '8px'}}>Original title: {original_title}</h5>

                    <h2>Overview:</h2>
                    <p>{overview}</p>

                    {tagline &&
                        <div>
                            <h5>Tagline:</h5>
                            <p>{tagline}</p>
                        </div>}

                </div>

                <div className={css.info}>
                    {status === 'Released'
                        ?
                        <div><h4>Release date : {release_date}</h4></div>
                        :
                        <div><h3>Not released</h3></div>}
                    <h4>Running time: {runtime} minutes</h4>


                    <div className={css.productBy}>

                        <h3>Product by:</h3>

                        <div className={css.logoCompanies}>

                            {production_companies?.map(company =>
                                <div className={css.logo}>
                                    {company.logo_path ?
                                        <img src={"https://image.tmdb.org/t/p/w300" + company.logo_path}/> :
                                        <h4>| {company.name} |</h4>}

                                </div>
                            )}

                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export {MovieDetail}