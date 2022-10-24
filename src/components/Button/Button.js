import React from 'react';
import {useSelector} from "react-redux";

import css from "./Button.module.css"

const Button = ({genre,setGenre}) => {

    const {theme}=useSelector(state => state.themeReducer)

    return (
        <div className={css.oneButton}>
           <button className={`${theme === 'light' ? css.light : css.dark}`} onClick={()=> setGenre(genre.id)}>{genre.name}</button>
        </div>
    );
};

export {Button}