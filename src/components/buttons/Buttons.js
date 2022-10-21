import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button} from "../Button/Button";
import css from "./Buttons.module.css"


const Buttons = () => {
    let [query, setQuery] = useSearchParams();


    const setGenre = (id) => {
        id > 0 ? query.set('genre', id) : query.delete('genre')
        query.set('page', 1)
        setQuery(query)
    }

    const {genres} = useSelector(state => state.movieReducer)

    return (
        <div className={css.buttons}>
            {genres.map((genre) => <Button genre={genre} setGenre={setGenre}/>)}
            <button onClick={() => setGenre(0)}>all</button>
        </div>
    );
};

export {Buttons}