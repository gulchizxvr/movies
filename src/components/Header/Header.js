import {useSearchParams} from "react-router-dom";
import React, {useState} from 'react';

import css from "./Header.module.css"
import {Buttons} from "../buttons/Buttons";
import ClearIcon from '@mui/icons-material/Clear';
import {Switch} from "@mui/material";

const Header = () => {

    const [query, setQuery] = useSearchParams();

    const [searching, setSearching] = useState("");



    const submit = () => {
        if (searching){
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
            <div>
                <input type="text" placeholder={"Введіть слово для пошуку"} onChange={changeValue} id={'searchValue'}/>

                {searching && <button  className={css.clear} onClick={() => clear()}><ClearIcon fontSize="small"/></button>}

                <button onClick={submit} disabled={!searching}>search</button>
            </div>

            {query.get("search") ? <button onClick={()=>deleteSearch()}>{query.get("search")}</button> : <Buttons/>}



        </div>

    );
};

export {Header}