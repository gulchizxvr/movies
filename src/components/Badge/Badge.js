import React from 'react';

import {CBadge} from "@coreui/react";
import css from "./Badge.module.css"

const Badge = ({genre}) => {
    return (
        <div className={css.badges} >
            <CBadge color="danger" shape="rounded-pill" >
                <span>{genre}</span>
            </CBadge>
        </div>
);
};

export
    {
        Badge
    }