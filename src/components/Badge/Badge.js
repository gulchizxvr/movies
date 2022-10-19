import React from 'react';
import {CBadge} from "@coreui/react";

const Badge = ({genre}) => {
    return (
        <div style={{margin:"3px"}}>
            <CBadge color="danger" shape="rounded-pill">
                <h7>{genre}</h7>
            </CBadge>
        </div>
);
};

export
    {
        Badge
    }