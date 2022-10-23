import React, {useState} from 'react';
import {useDispatch} from "react-redux";



import css from "./Switcher.module.css"
import {Switch} from "@mui/material";
import {themeActions} from "../../redux";


const Switcher = () => {

    const dispatch = useDispatch()

    const defaultTheme = window.localStorage.getItem("theme")

    const [theme,setTheme] = useState(defaultTheme);

    dispatch(themeActions.changeTheme(theme))

    const change = () => {
        theme === "light" ? window.localStorage.setItem('theme','dark') : window.localStorage.setItem('theme','light')
        setTheme(window.localStorage.getItem("theme"))
    }




    return (
        <div className={css.switcher}>
            <Switch onClick={()=>change()} checked={theme==="dark"}/>
        </div>
    );
};

export {Switcher}