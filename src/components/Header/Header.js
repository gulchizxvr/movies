import React from 'react';
import {useForm} from "react-hook-form";

import css from "./Header.module.css"
import {useSearchParams} from "react-router-dom";


const Header = () => {

    let [query,setQuery] = useSearchParams();

    const {register, handleSubmit,reset} = useForm();

    function submit(searchData) {
        console.log(searchData);
        reset()
    }

    const setGenre = (id) => {
        id>0 ? query.set('genre',id) : query.delete('genre')
        query.set('page',1)
        setQuery(query)
    }

    return (

            <div className={css.header}>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={"Введіть літеру чи цифру"} {...register("searchValue")}/>
                    <button>Пошук</button>
                </form>
                <div>
                    <button onClick={() => setGenre(12)}>adventure</button>
                    <button onClick={() => setGenre(28)}>action</button>
                    <button onClick={() => setGenre(0)}>all</button>

                </div>
            </div>

    );
};

export {Header}