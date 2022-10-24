import React from 'react';

import css from "./Button.module.css"
import {useSelector} from "react-redux";

const Button = ({genre,setGenre}) => {

    const {theme}=useSelector(state => state.themeReducer)

    return (
        <div className={css.oneButton}>
           <button className={`${theme === 'light' ? css.light : css.dark}`} onClick={()=> setGenre(genre.id)}>{genre.name}</button>
        </div>
    );
};

export {Button}