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
    async ({page}, {rejectedWithValue, dispatch, getState}) => {
        try {
            const {data} = await movieService.getMovies(page)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const getMoviesWithGenre = createAsyncThunk(
    'movieSlice/getMoviesWithGenre',
    async ({genre,page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getMoviesGenre(genre,page)
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
            return data.genres
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const getMoviesSearch = createAsyncThunk(
    'movieSlice/getMoviesSearch',
    async ({value,page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getSearchedMovies(value,page)
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
            .addCase(getMoviesSearch.fulfilled,(state,action)=>{
                state.movies = action.payload
            })

});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getMoviesData,
    getGenres,
    getMoviesWithGenre,
    getMoviesSearch
}

export {
    movieReducer, movieActions
}

