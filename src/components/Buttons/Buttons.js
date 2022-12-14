import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";


import css from "./Buttons.module.css"
import {Button} from "../Button/Button";


const Buttons = () => {
    let [query, setQuery] = useSearchParams();

    const {theme}=useSelector(state => state.themeReducer)
    const {genres} = useSelector(state => state.genreReducer)

    const setGenre = (id) => {
        id > 0 ? query.set('genre', id) : query.delete('genre')
        query.set('page', 1)
        query.delete('search')
        setQuery(query)
    }

    if (query.get("genre")) {

        return (<div className={css.buttonsAll}>
            <button className={`${theme === "light" ?  css.light : css.dark}`} onClick={() => setGenre(0)}>Go to all genres</button>
        </div>)

    }

    return (<div className={`${css.chooseGenre} ${theme==='light' ? css.light : css.dark}`}>
            <h2>You can choose:</h2>
            <div className={css.buttons}>
                {genres.map((genre) => <Button genre={genre} setGenre={setGenre} key={genre.id}/>)}
            </div>
        </div>
    );
};

export {Buttons}