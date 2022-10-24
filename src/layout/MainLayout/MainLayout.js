import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../../components";
import css from "./MainLayout.module.css"




const MainLayout = () => {

    const {theme}=useSelector(state => state.themeReducer)

    return (
        <div className={ theme === "light" ? css.all : css.allDark}>
           <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}