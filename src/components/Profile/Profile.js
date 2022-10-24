import React from 'react';
import {useSelector} from "react-redux";

import css from "./Profile.module.css";

const Profile = () => {
    const {theme}=useSelector(state => state.themeReducer)

    const {info} = useSelector(state => state.profileReducer);
    return (
            <div className={`${css.profile} ${theme==="light" ? css.light : css.dark}`}>
                <h4>Welcome, {info?.username}!</h4>
                {info && <img src={"https://image.tmdb.org/t/p/w300" + info?.avatar?.tmdb?.avatar_path} alt=""/>}
            </div>
    );
};

export {Profile}