import React from 'react';
import {useForm} from "react-hook-form";

import css from "./Header.module.css"
import {useSearchParams} from "react-router-dom";


const Header = () => {

    let [query,setQuery] = useSearchParams({genre:'1'});

    const {register, handleSubmit,reset} = useForm();

    function submit(searchData) {
        console.log(searchData);
        reset()
    }

    const setGenre = () => {
        query.set('genre',12)
        setQuery(query)
    }


    return (

            <div className={css.header}>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={"Введіть літеру чи цифру"} {...register("searchValue")}/>
                    <button>Пошук</button>
                </form>
                <div>
                    <button onClick={() => setGenre()}>action</button>
                </div>
            </div>

    );
};

export {Header}