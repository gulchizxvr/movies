import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    currentMovie: null,
    error: null
}

const getMoviesData = createAsyncThunk(
    'movieSlice/getMovie',
    async (_,{rejectedWithValue,dispatch, getState}) => {
        const {data} = await movieService.getMovie()
        dispatch(getMovies(data))
        const state = getState()
    }
)

const getGenresAll = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {rejectedWithValue,dispatch,getState}) => {
        const {data} = await movieService.getGenre()
        dispatch(getGenres(data))
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

        getMovies:(state,action)=>{
            state.movies = action.payload
        },
        getGenres:(state, action)=>{
            state.genres = action.payload
        }

    }
});

  const {reducer:movieReducer, actions: {getMovies,getGenres}} = movieSlice

const movieActions = {
    getMoviesData,
    getGenresAll
}

export {
      movieReducer,movieActions
}

