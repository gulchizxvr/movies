import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import css from "./Buttons.module.css"
import {Button} from "../Button/Button";


const Buttons = () => {
    let [query, setQuery] = useSearchParams();


    const setGenre = (id) => {
        id > 0 ? query.set('genre', id) : query.delete('genre')
        query.set('page', 1)
        query.delete('search')
        setQuery(query)
    }


    const {genres} = useSelector(state => state.genreReducer)

    return (
        query.get("genre") ?
            <div className={css.buttonAll}>
                <button onClick={() => setGenre(0)}>Go to all genres</button>
            </div>

            :

            <div>
                <h2 style={{color: "white"}}>You can choose</h2>
                <div className={css.buttons}>
                    {genres.map((genre) => <Button genre={genre} setGenre={setGenre} key={genre.id}/>)}
                </div>
            </div>
    );
};

export {Buttons}