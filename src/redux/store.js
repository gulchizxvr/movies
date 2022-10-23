import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer} from "./slices";


const rootReducer = combineReducers({
    movieReducer,
    themeReducer,
    genreReducer
})

const setupStore = ()=> configureStore({
    reducer: rootReducer
})
export {setupStore}