import { useRef, useReducer } from "react";
import { useForm } from "react-hook-form";

import classes from "./Register.module.css";

const initialError = {
    nameError: "",
    phoneError: "",
    emailError: "",
    passwordError: "",
    repasswordError: "",
};

const errorReducer = (state, action) => {
    switch (action.type) {
        case "NAME":
            return {
                ...state,
                nameError: "Tên đăng nhập không để trống",
            };
        case "PHONE":
            return {
                ...state,
                phoneError: "Số điện thoại không để trống",
            };
        case "EMAIL":
            return {
                ...state,
                emailError: "Email không để trống",
            };
        case "PASSWORD":
            return {
                ...state,
                passwordError: "Password không để trống",
            };
        case "REPASSWORD":
            return {
                ...state,
                repasswordError: "Password không để trống",
            };
        case 'changeNAME' : {

        }
    }
};

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const repasswordRef = useRef();

    const [errorState, dispatchError] = useReducer(errorReducer, initialError);
    const { nameError, phoneError, emailError, passwordError, repasswordError } = errorState;

    const nameBlurHandler = (event) => {
        const username = nameRef.current.value;
        if (username.trim() === "") {
            dispatchError({ type: "NAME" });
        }
    };

    const phoneBlurHandler = (event) => {
        const phone = phoneRef.current.value;
        if (phone.trim() === "") {
            dispatchError({ type: "PHONE" });
        }
    };

    const emailBlurHandler = (event) => {
        const email = emailRef.current.value;
        if (email.trim() === "") {
            dispatchError({ type: "EMAIL" });
        }
    };

    const passwordBlurHandler = (event) => {
        const password = passwordRef.current.value;
        if (password.trim() === "") {
            dispatchError({ type: "PASSWORD" });
        }
    };

    const repasswordBlurHandler = (event) => {
        const repassword = repasswordRef.current.value;
        if (repassword.trim() === "") {
            dispatchError({ type: "REPASSWORD" });
        }
    };

    const nameChangeHandler = (event) => {
        
    }
    const phoneChangeHandler = (event) => {

    }
    const emailChangeHandler = (event) => {

    }
    const passwordChangeHandler = (event) => {

    }
    const repasswordChangeHandler = (event) => {

    }

    const singupHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.register}>
            <div className={classes.title}>
                <h3>Register</h3>
            </div>
            <form onSubmit={singupHandler} className={classes.content}>
                <div className={classes.controls}>
                    <label htmlFor="username">Username</label>
                    <input
                        ref={nameRef}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        type="text"
                        placeholder="Enter your username ..."
                    />
                    <span className={classes.error}>{nameError}</span>
                </div>
                <div className={classes.controls}>
                    <label htmlFor="phone">Phone</label>
                    <input ref={phoneRef} 
                    onChange={phoneChangeHandler} onBlur={phoneBlurHandler} type="text" placeholder="0398 645 078 " />
                    <span className={classes.error}>{phoneError}</span>
                </div>
                <div className={classes.controls}>
                    <label htmlFor="email">Email</label>
                    <input
                        ref={emailRef}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        type="email"
                        placeholder="Enter your email ..."
                    />
                    <span className={classes.error}>{emailError}</span>
                </div>
                <div className={classes.controls}>
                    <label htmlFor="password">Password</label>
                    <input
                        ref={passwordRef}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        type="text"
                        placeholder="Enter your password ..."
                    />
                    <span className={classes.error}>{passwordError}</span>
                </div>
                <div className={classes.controls}>
                    <label htmlFor="repassword">Password</label>
                    <input
                        ref={repasswordRef}
                        onChange={repasswordChangeHandler}
                        onBlur={repasswordBlurHandler}
                        type="text"
                        placeholder="Enter your password ..."
                    />
                    <span className={classes.error}>{repasswordError}</span>
                </div>

                <div className={classes.actions}>
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                    <button className="btn">Close</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
