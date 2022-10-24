import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import css from "./Buttons.module.css"
import {Button} from "../Button/Button";


const Buttons = () => {
    let [query, setQuery] = useSearchParams();
    const {theme}=useSelector(state => state.themeReducer)

    const setGenre = (id) => {
        id > 0 ? query.set('genre', id) : query.delete('genre')
        query.set('page', 1)
        query.delete('search')
        setQuery(query)
    }


    const {genres} = useSelector(state => state.genreReducer)

    if (query.get("genre")) {



        return (<div className={`${css.buttons} ${theme==="light" ? css.buttonsAllDark : null}`}>
            <button onClick={() => setGenre(0)}>Go to all genres</button>
        </div>)

    }

    return (<div>
            <h2 style={{color: "white"}}>You can choose</h2>
            <div className={css.buttons}>
                {genres.map((genre) => <Button genre={genre} setGenre={setGenre} key={genre.id}/>)}
            </div>
        </div>
    );
};

export {Buttons}