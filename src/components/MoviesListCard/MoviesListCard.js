import React from 'react';

import css from './MovieListCard.module.css'

const MoviesListCard = ({movie}) => {

    const {title,overview} = movie
    return (
        <div className={css.card}>
            <h3>{title}</h3>
            <p>{overview}</p>
            <img src="https://college.unc.edu/wp-content/uploads/sites/1280/2020/05/film1.jpg" style={{width:"200px"}} alt=""/>
        </div>
    );
};

export {MoviesListCard}