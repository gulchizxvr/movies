import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: "light"
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

const {reducer: themeReducer, actions: {changeTheme}} = themeSlice

const themeActions = {
    changeTheme
}

export {
    themeReducer, themeActions
}