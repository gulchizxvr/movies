import React from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./Navigation.module.css"
import {useSelector} from "react-redux";
import {Switch} from "@mui/material";


const Navigation = () => {
    const [query,setQuery] = useSearchParams({page:'1'})


 // *****
    let {movies} = useSelector(state => state.movieReducer);
    const x = movies?.total_results
//******


    const prevPage = () => {
        const prev = query.get('page')-1
        query.set('page',prev)
        setQuery(query)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    const nextPage = () => {
        const prev = +query.get('page')+1
        query.set('page',prev)
        setQuery(query)
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    return (
        <div className={css.buttons}>
            {+query.get("page")>1 && <button onClick={prevPage}>Previous page</button>}
            {+query.get("page")<x && <button onClick={nextPage}>Next page</button>}
        </div>
    );
}

export default Navigation;