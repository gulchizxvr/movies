import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
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

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

        getMovies:(state,action)=>{
            state.movies = action.payload
        }

    }
});

  const {reducer:movieReducer, actions: {getMovies}} = movieSlice

const movieActions = {
    getMoviesData
}

export {
      movieReducer,movieActions
}

