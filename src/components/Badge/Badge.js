import React from 'react';

import {CBadge} from "@coreui/react";
import css from "./Badge.module.css"
import {useSelector} from "react-redux";

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