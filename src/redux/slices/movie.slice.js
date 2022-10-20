import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    genres: [],
    currentMovie: null,
    error: null,
    totalPage: null,
    genre: null
}

const getMoviesData = createAsyncThunk(
    'movieSlice/getMoviesData',
    async ({x}, {rejectedWithValue, dispatch, getState}) => {
        try {
            const {data} = await movieService.getMovies(x)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const getMoviesWithGenre = createAsyncThunk(
    'movieSlice/getMoviesWithGenre',
    async ({y,x}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getMoviesGenre(y,x)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)


const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {rejectedWithValue, getState}) => {

        try {
            const {data} = await movieService.getGenre()
            const state = getState()
            console.log(state);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMoviesData.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getMoviesWithGenre.fulfilled, (state, action) => {
                state.movies = action.payload
            })

});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getMoviesData,
    getGenres,
    getMoviesWithGenre
}

export {
    movieReducer, movieActions
}

