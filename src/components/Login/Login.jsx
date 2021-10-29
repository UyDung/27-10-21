import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../../store/auth-Slice';

import classes from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector( state => state.auth.login);

    useEffect(() => {
        if(isLoggedIn) {
            history.push('/'); 
        }
    });

    const formSubmitHandler = (event) => {
        event.preventDefault();
        dispatch( authActions.loginHandler());     
         history.goBack();
    }


    return (
        <form onSubmit={formSubmitHandler} className={classes.login} >
            <h3>Login Form</h3>

            <div className={classes.controls}>
                <label htmlFor="usename">UserName</label>
                <input type="text" placeholder='Enter your usename...' />
            </div>
            <div className={classes.controls}>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='Enter your password...' />
            </div>
            <div className={classes.actions}>
                <button className="btn">Sign in</button>
            </div>
        </form>
    )
}

export default Login
