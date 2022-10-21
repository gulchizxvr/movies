import React from 'react';



import {Header} from "../../components";
import {Outlet} from "react-router-dom";

import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div className={css.all}>
           <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}