import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../../store/auth-Slice';

import classes from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector( state => state.auth );
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(isLoggedIn.login) {
            history.push('/'); 
        }
    });    

    const  usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if( username.trim() === '' || password.trim() === '') {alert('do not empty'); return;}
       
        dispatch( authActions.loginHandler());     
        history.goBack();
    }


    return (
        <form onSubmit={formSubmitHandler} className={classes.login} >
            <h3>Login Form</h3>

            <div className={classes.controls}>
                <label htmlFor="usename">UserName</label>
                <input onChange={usernameChangeHandler} value={username} type="text" placeholder='Enter your usename...' />
            </div>
            <div className={classes.controls}>
                <label htmlFor="password">Password</label>
                <input onChange={passwordChangeHandler} value={password} type="password" placeholder='Enter your password...' />
            </div>
            <div className={classes.actions}>
                <button className="btn">Sign in</button>
            </div>
        </form>
    )
}

export default Login
