import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    token: ''
}

createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            
        }
    }
})