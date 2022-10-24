import React from 'react';
import {useSelector} from "react-redux";

import {CBadge} from "@coreui/react";
import css from "./Badge.module.css"

const Badge = ({genre}) => {

    const {theme}=useSelector(state => state.themeReducer)

    return (
            <div className={css.badges}>
                <CBadge color={theme === 'light' ? 'dark' : 'danger'} shape="rounded-pill">
                    <span>{genre}</span>
                </CBadge>
            </div>
);
};

export
    {
        Badge
    }