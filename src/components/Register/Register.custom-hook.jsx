import useForm from "../../hooks/use-Form";
import classes from "./Register.module.css";

const validateName = (name) => {
    const regex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    return regex.test(String(name));
};

const validatePhone = (phone) => {
    const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return regex.test(String(phone));
};

const validateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

const validatePassword = (value) => {
    const pt = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pt.test(String(value.trim()));
};

const Register = () => {
    const {
        value: enteredName,
        valueIsValid: enteredNameIsValid,
        hasError: nameInputHasError,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useForm(validateName);

    const {
        value: enteredPhone,
        valueIsValid: enteredPhoneIsValid,
        hasError: phoneInputHasError,
        inputChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useForm(validatePhone);

    const {
        value: enteredEmail,
        valueIsValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useForm(validateEmail);

    const {
        value: enteredPassword,
        valueIsValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        inputChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useForm(validatePassword);

    const {
        value: enteredPasswordConfirm,
        valueIsValid: enteredPasswordConfirmIsValid,
        hasError: passwordConfirmInputHasError,
        inputChangeHandler: passwordConfirmChangeHandler,
        inputBlurHandler: passwordConfirmBlurHandler,
        reset: resetPasswordConfirm,
    } = useForm(validatePassword);

    let formIsValid = false;
    if (
        enteredNameIsValid &&
        enteredPhoneIsValid &&
        enteredEmailIsValid &&
        enteredPasswordIsValid &&
        enteredPasswordConfirmIsValid
    ) {
        formIsValid = true;
    }

    const signupHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            
            return;
        }
        console.log(enteredName, enteredPhone, enteredEmail, enteredPassword, enteredPasswordConfirm);
        resetName();
        resetPhone();
        resetEmail();
        resetPassword();
        resetPasswordConfirm();
    };

    const inputNameClasses = `${classes.controls} ${nameInputHasError ? classes.invalid : ""}`;

    return (
        <div className={classes.register}>
            <div className={classes.title}>
                <h3>Register</h3>
            </div>
            <form onSubmit={signupHandler} className={classes.content}>
                <div className={inputNameClasses}>
                    <label htmlFor="username">
                        Username <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                        type="text"
                        name="username"
                        autoComplete="off"
                        placeholder="Uy Dung"
                    />
                    {nameInputHasError && (
                        <span className={classes.error}>Username at least 8 character and no number</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="phone">
                        Phone <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}
                        value={enteredPhone}
                        type="text"
                        name="phone"
                        autoComplete="off"
                        placeholder="0398 645 078"
                    />
                    {phoneInputHasError && <span className={classes.error}>Wrong phone number syntax</span>}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Email<span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail}
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="dungnguyendinh911@gmail.com"
                    />
                    {emailInputHasError && <span className={classes.error}>Wrong email syntax</span>}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Password <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                        type="password"
                        name="password"
                        autoComplete="off"
                    />
                    {passwordInputHasError && (
                        <span className={classes.error}>
                            Minimum eight characters, at least one letter and one number:
                        </span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Confirm Password <span className={classes.error}>(*)</span>{" "}
                    </label>
                    <input
                        onChange={passwordConfirmChangeHandler}
                        onBlur={passwordConfirmBlurHandler}
                        value={enteredPasswordConfirm}
                        type="password"
                        name="passwordconfirm"
                        autoComplete="off"
                    />
                    {passwordConfirmInputHasError && (
                        <span className={classes.error}>
                            Minimum eight characters, at least one letter and one number:
                        </span>
                    )}
                </div>

                <div className={classes.actions}>
                    <button type="submit" className="btn" >
                        Sign Up
                    </button>
                    <button className="btn">Close</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
