import React from 'react';

import {CBadge} from "@coreui/react";
import css from "./Baduge.module.css"

const Badge = ({genre}) => {
    return (
        <div className={css.badges} >
            <CBadge color="danger" shape="rounded-pill" >
                <h7>{genre}</h7>
            </CBadge>
        </div>
);
};

export
    {
        Badge
    }