import React from 'react';

import {CBadge} from "@coreui/react";
import css from "./Badge.module.css"
import {useSelector} from "react-redux";

const Badge = ({genre}) => {

    const {theme}=useSelector(state => state.themeReducer)

    return (
        theme === 'light' ?
            <div className={css.badges}>
                <CBadge color="dark" shape="rounded-pill">
                    <span>{genre}</span>
                </CBadge>
            </div>
            :
            <div className={css.badges}>
                <CBadge color="danger" shape="rounded-pill">
                    <span>{genre}</span>
                </CBadge>
            </div>

);
};

export
    {
        Badge
    }