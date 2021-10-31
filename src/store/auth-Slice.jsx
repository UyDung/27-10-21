import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {login: false, changed: false},
    reducers: {
        loginHandler(state ) {
            state.login = true;
            state.changed = true;
        },
        logoutHandler(state ) {
            state.login = false;
            state.changed = true;
        },
        replaceLogin(state, action) {
            state.login = action.payload.login;
        }
    }
});

 
export const sendLogginState = (logginState) => {    
    localStorage.setItem('loggin', JSON.stringify({login: logginState}) );
}

export const replaceLoginState = () => {    
    const logginState = JSON.parse(localStorage.getItem('loggin'));
    return (dispatch) => {
        dispatch(authActions.replaceLogin(logginState));
    }
}

export const authActions = authSlice.actions;
export default authSlice;