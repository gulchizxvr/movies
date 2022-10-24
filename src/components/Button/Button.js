import React from 'react';
import css from "./Button.module.css"


const Button = ({genre,setGenre}) => {



    const select = (id) => {
        setGenre(id)

    }


    return (
        <div className={css.onebutton}>
           <button onClick={()=> select(genre.id)}>{genre.name}</button>
        </div>
    );
};

export {Button}