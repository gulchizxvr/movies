import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {movieService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesList} from "../MoviesList/MoviesList";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const Header = () => {

    const {register, handleSubmit,reset} = useForm();

    function submit(searchData) {
        console.log(searchData);
        reset()
    }



    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={"Введіть літеру чи цифру"} {...register("searchValue")}/>
                    <button>Пошук</button>
                </form>

            </div>


            <div>



            </div>
        </div>
    );
};

export {Header}