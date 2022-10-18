import React from 'react';
import {useForm} from "react-hook-form";

import css from "./Header.module.css"


const Header = () => {

    const {register, handleSubmit,reset} = useForm();

    function submit(searchData) {
        console.log(searchData);
        reset()
    }



    return (

            <div className={css.header}>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={"Введіть літеру чи цифру"} {...register("searchValue")}/>
                    <button>Пошук</button>
                </form>

            </div>

    );
};

export {Header}