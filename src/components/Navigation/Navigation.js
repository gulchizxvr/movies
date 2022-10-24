import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

import css from "./Navigation.module.css"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {blue, green} from '@mui/material/colors';


const Navigation = () => {
    const [query,setQuery] = useSearchParams({page:'1'})

    let {movies} = useSelector(state => state.movieReducer);
    const totalPages = movies?.total_pages

    const {theme}=useSelector(state => state.themeReducer)


    const goPrevious = () => {
        const previous = query.get('page')-1
        query.set('page',previous)
        setQuery(query)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    const goNext = () => {
        const next = +query.get('page')+1
        query.set('page',next)
        setQuery(query)
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    return (
        <div className={css.navigation}>

            {+query.get("page")>1 &&
                <div className={css.prevButton}><ArrowBackIosNewIcon fontSize={"large"} sx={{color: theme === 'light' ? blue[500] : green[500]}} onClick={goPrevious}>Previous
                    page</ArrowBackIosNewIcon></div>}

            {totalPages>0 && <h3 className={`${theme === 'light' ? css.light : css.dark}`}> Page: {query.get('page')} of {totalPages}</h3>}

            {+query.get("page")<totalPages &&
                <div className={css.nextButton}><ArrowForwardIosIcon fontSize={"large"} sx={{color: theme === 'light' ? blue[500] : green[500]}} onClick={goNext}>Next
                    page</ArrowForwardIosIcon></div>}
        </div>
    );
}

export {Navigation}