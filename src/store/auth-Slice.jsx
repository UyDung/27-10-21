import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {login: false},
    reducers: {
        loginHandler(state ) {
            state.login = true;
        },
        logoutHandler(state ) {
            state.login = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;