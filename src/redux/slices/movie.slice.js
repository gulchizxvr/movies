import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    currentMovie: false,
    error: false,
    loading: false
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
    reducers: {
        selectMovie: (state,action) => {
            state.currentMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMoviesData.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getMoviesData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMoviesData.rejected, (state, action) => {
                state.error = action.payload
            })


            .addCase(getMoviesWithGenre.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getMoviesWithGenre.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMoviesWithGenre, (state, action) => {
                state.error = action.payload
            })


            .addCase(getMoviesSearch.fulfilled,(state,action)=>{
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getMoviesSearch.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMoviesSearch.rejected, (state, action) => {
                state.error = action.payload
            })
});

const {reducer: movieReducer, actions:{selectMovie}} = movieSlice

const movieActions = {
    getMoviesData,
    getMoviesWithGenre,
    getMoviesSearch,
    selectMovie
}

export {
    movieReducer, movieActions
}

