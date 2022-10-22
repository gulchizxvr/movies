import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movie.slice";
import {themeReducer} from "./slices/theme.slice";

const rootReducer = combineReducers({
    movieReducer,
    themeReducer
})

const setupStore = ()=> configureStore({
    reducer: rootReducer
})
export {setupStore}