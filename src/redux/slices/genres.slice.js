import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    genres: [],
    currentGenres: null
}


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

const genreSlice = createSlice( {
    name: 'genreSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                    state.genres = action.payload
                })
})

const {reducer: genreReducer} = genreSlice

const genreActions = {
    getGenres,
}

export {
    genreReducer,genreActions
}