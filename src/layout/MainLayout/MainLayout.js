import React from 'react';



import {Header} from "../../components";
import {Outlet} from "react-router-dom";

import css from "./MainLayout.module.css"
import {useSelector} from "react-redux";



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