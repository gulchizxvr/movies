import {useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./Header.module.css"
import ClearIcon from '@mui/icons-material/Clear';

import {Buttons} from "../Buttons/Buttons";
import {Switcher} from "../Switcher/Switcher";
import {genreActions, profileActions} from "../../redux";
import {Profile} from "../Profile/Profile";


const Header = () => {

    const {theme}=useSelector(state => state.themeReducer)
    const {currentMovie} = useSelector(state => state.movieReducer);

    const [query, setQuery] = useSearchParams();

    const [searching, setSearching] = useState("");

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(genreActions.getGenres())
        dispatch(profileActions.getInfoProfile())
    }, [dispatch])


    const submit = () => {
        if (searching) {
            query.set('search', searching)
            query.delete('genre')
            setQuery(query)
        }
    }

    const changeValue = (value) => {
        const {target} = value
        query.delete('page')
        setSearching(target.value)
    }

    const clear = () => {
        document.getElementById('searchValue').value = ""
        setSearching(null)
    }

    const deleteSearch = () => {
        document.getElementById('searchValue').value = ""
        query.delete('search')
        setQuery(query)
        setSearching(null)

    }

    return (

        <div className={css.header}>

            <div className={css.head}>

                <Switcher/>

                <div className={css.inputLine}>
                    <input type="text" placeholder={"Введіть слово для пошуку"} onChange={changeValue}
                           id={'searchValue'}/>
                    {searching &&
                        <button className={css.clearButton} onClick={() => clear()}><ClearIcon fontSize="small"/>
                        </button>}

                    <button onClick={submit} disabled={!searching}>search</button>
                </div>

                <Profile/>

            </div>

            <div className={css.buttonsGenre}>
                {currentMovie &&
                    (query.get("search") ?

                        <div className={`${css.removeSearch} ${theme==='light' ? css.light : css.dark}`} onClick={() => deleteSearch()}>
                            <h3>Delete "{query.get("search")}"</h3>
                        </div>

                        :

                        <Buttons/>)}
            </div>

        </div>

    );
};

export {Header}