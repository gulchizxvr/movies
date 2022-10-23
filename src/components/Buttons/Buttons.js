import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";


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
        <div className={css.buttons}>
            {genres.map((genre) => <Button genre={genre} setGenre={setGenre}/>)}
            <button onClick={() => setGenre(0)}>all</button>
        </div>
    );
};

export {Buttons}