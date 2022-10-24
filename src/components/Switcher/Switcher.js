import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";


import css from "./Switcher.module.css"
import {Switch} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {themeActions} from "../../redux";


const Switcher = () => {

    const dispatch = useDispatch()

    const defaultTheme = window.localStorage.getItem("theme")

    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        dispatch(themeActions.changeTheme(theme))
    }, [theme])

    const change = () => {
        theme === "light" ? window.localStorage.setItem('theme', 'dark') : window.localStorage.setItem('theme', 'light')
        setTheme(window.localStorage.getItem("theme"))
        dispatch(themeActions.changeTheme(theme))
    }

    return (
        <div className={theme === "light" ? css.switcher : css.switcherDark}>
            <LightModeIcon/>
            <Switch onClick={() => change()} checked={theme === "dark"}/>
            <DarkModeIcon/>
        </div>
    );
};

export {Switcher}