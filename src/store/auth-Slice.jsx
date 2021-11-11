import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    email: '',
    login: false,
    token: '',
    changed: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginHandler(state, action ) {
            const token = action.payload;           
            state.token = token;            
            state.changed = true;     
            localStorage.setItem(process.env.REACT_APP_LOCAL_KEY, token);        
        },
        logoutHandler(state ) {
            state.token = '';
            state.changed = true;
            localStorage.removeItem(process.env.REACT_APP_LOCAL_KEY);
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