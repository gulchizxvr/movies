import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, profileReducer, themeReducer} from "./slices";


const rootReducer = combineReducers({
    movieReducer,
    themeReducer,
    genreReducer,
    profileReducer
})

const setupStore = ()=> configureStore({
    reducer: rootReducer
})
export {setupStore}