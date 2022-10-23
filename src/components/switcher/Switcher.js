import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux/slices/theme.slice";

import css from "./Switcher.module.css"
import {Switch} from "antd";

const Switcher = () => {

    const dispatch = useDispatch();

    // const [themis, setThemis] = useState("light");

    const {theme} = useSelector(state => state.themeReducer)

    console.log(theme)
    const change = () => {
    if (theme === "light") {
        dispatch(themeActions.changeTheme("dark"))
    } else {
        dispatch(themeActions.changeTheme("light"))
    }
    }

    return (
        <div className={css.switcher}>
            <Switch/>
        </div>
    );
};

export {Switcher}