import React from 'react';
import {MoviesList} from "../../components";
import Navigation from "../../components/navigation/Navigation";


const MoviesPage = () => {
    return (
        <div>
            <MoviesList/>
            <Navigation/>
        </div>
    );
};

export {MoviesPage};