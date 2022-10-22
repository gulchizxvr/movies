import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import css from "./Header.module.css"
import {useSearchParams} from "react-router-dom";
import {Buttons} from "../buttons/Buttons";

import {useSelector} from "react-redux";


const Header = () => {

    const [query,setQuery] = useSearchParams();

    const {register, handleSubmit,reset} = useForm();


    const [check,setCheck] = useState(0);




    function submit(searchData) {
        const {searchValue} = searchData;
        console.log(searchValue);
        query.set('search',searchValue)
        query.delete('genre')
        setQuery(query)
    }

    function checki(searches) {
        const {searchValue} = searches
        query.delete('page')
        setCheck(searchValue)
    }
const clear = () => {
        reset()
    query.delete('search')
    setQuery(query)

}
    return (

            <div className={css.header}>
                <div>
                    <form onSubmit={handleSubmit(submit)} onChange={handleSubmit(checki)}>
                        <input type="text" placeholder={"Введіть літеру чи цифру"} {...register("searchValue")}/>
                        <button>Пошук</button>
                    </form>
                    {check && <button onClick={()=> clear()}>x</button>}
                </div>
                    <Buttons/>
            </div>

    );
};

export {Header}