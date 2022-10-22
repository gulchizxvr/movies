import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {themeActions} from "../../redux/slices/theme.slice";

const Switcher = () => {

    const dispatch = useDispatch();

    const [themis, setThemis] = useState("light");
    console.log(themis)
    return (
        <div>
            <button onClick={() => {
                if (themis !== "light") {
                    dispatch(themeActions.changeTheme("dark"))
                    setThemis("light")
                } else if (themis === "light"){
                    dispatch(themeActions.changeTheme("light"))
                    setThemis("dark")
                }
            }}>
                change
            </button>
        </div>
    );
};

export {Switcher}