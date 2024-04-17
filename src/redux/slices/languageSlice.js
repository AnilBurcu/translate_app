import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: null,
    languages: []
}

const languageSlices = createSlice({
    name: 'languages',
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
})

export default languageSlices.reducer 