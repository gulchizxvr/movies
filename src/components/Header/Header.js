import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import css from "./Header.module.css"
import {useSearchParams} from "react-router-dom";
import {Buttons} from "../buttons/Buttons";
import {Input} from "@mui/material";


const Header = () => {

    const [query,setQuery] = useSearchParams();

    const {register, handleSubmit,reset} = useForm();


    const [check,setCheck] = useState(null);


    function submit(searchData) {
        const {searchValue} = searchData;
        console.log(searchValue);
        query.set('search',searchValue)
        query.delete('genre')
        setQuery(query)
    }

    function checki(searches) {
        const {searchValue} = searches
        setCheck(searchValue)
    }


    return (

            <div className={css.header}>
                <div className={css.form}>
                    <form onSubmit={handleSubmit(submit)} onChange={handleSubmit(checki)}>
                        <input type="text" placeholder={"Введіть літеру чи цифру"} {...register("searchValue")}/>
                        <button>Пошук</button>
                    </form>
                </div>
                    <Buttons/>
            </div>

    );
};

export {Header}