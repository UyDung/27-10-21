import { useState} from 'react';
import useForm from "../../hooks/use-Form";

import classes from "./Register.module.css";

const Register = () => {
    const [isValid, setIsValid] = useState(false);

    const {
        inputValue: username,
        inputError: usernameError,
        onChange: usernameChangeHandler,
        onBlur: usernameBlurHandler,
    } = useForm();

    const {
        inputValue: phone,
        inputError: phoneError,
        onChange: phoneChangeHandler,
        onBlur: phoneBlurHandler,
    } = useForm();
    const {
        inputValue: email,
        inputError: emailError,
        onChange: emailChangeHandler,
        onBlur: emailBlurHandler,
    } = useForm();
    const {
        inputValue: password,
        inputError: passwordError,
        onChange: passwordChangeHandler,
        onBlur: passwordBlurHandler,
    } = useForm();
    const {
        inputValue: passwordConfirm,
        inputError: passwordConfirmError,
        onChange: passwordConfirmChangeHandler,
        onBlur: passwordConfirmBlurHandler,
    } = useForm();

 

    const signupHandler = (event) => {
        event.preventDefault();
        if(!isValid) {
            return;
        }
    };

    const btnClasses = `classes.${!isValid &&  'invalid'}}`;
 
    return (
        <div className={classes.register}>
            <div className={classes.title}>
                <h3>Register</h3>
            </div>
            <form onSubmit={signupHandler} className={classes.content}>
                <div className={classes.controls}>
                    <label htmlFor="username">
                        Username <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={usernameChangeHandler}
                        onBlur={usernameBlurHandler}
                        value={username}
                        type="text"
                        name="username"
                        autoComplete="off"
                        placeholder="Uy Dung"
                    />
                    <span className={classes.error}>{usernameError}</span>
                </div>

                <div className={classes.controls}>
                    <label htmlFor="phone">
                        Phone <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}
                        value={phone}
                        type="text"
                        name="phone"
                        autoComplete="off"
                        placeholder="0398 645 078"
                    />
                    <span className={classes.error}>{phoneError}</span>
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Email<span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={email}
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="dungnguyendinh911@gmail.com"
                    />
                    <span className={classes.error}>{emailError}</span>
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Password <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={password}
                        type="password"
                        name="password"
                        autoComplete="off"
                    />
                    <span className={classes.error}>{passwordError}</span>
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Confirm Password <span className={classes.error}>(*)</span>{" "}
                    </label>
                    <input
                        onChange={passwordConfirmChangeHandler}
                        onBlur={passwordConfirmBlurHandler}
                        value={passwordConfirm}
                        type="password"
                        name="passwordconfirm"
                        autoComplete="off"
                    />
                    <span className={classes.error}>{passwordConfirmError}</span>
                    
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
