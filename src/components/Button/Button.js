import React from 'react';

import css from "./Button.module.css"

const Button = ({genre,setGenre}) => {

    return (
        <div className={css.onebutton}>
           <button onClick={()=> setGenre(genre.id)}>{genre.name}</button>
        </div>
    );
};

export {Button}