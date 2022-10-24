import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    info: null,

}

const getInfoProfile = createAsyncThunk(
    "getInfoProfile",
    async (_,{rejectedWithValue}) => {
        try {
            const {data} = await movieService.getInfo()
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getInfoProfile.fulfilled, (state, action) => {
                state.info = action.payload
            })
})

const {reducer:profileReducer} = profileSlice

const profileActions = {
    getInfoProfile
}

export {profileReducer,profileActions}