import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useRegister } from "../../hooks/use-Register";
import classes from "./Register.module.css";

const Register = () => {
    const [member, setMember] = useState({});
    const history = useHistory();
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({ mode: "all" });

    // if (Object.keys(member).length !== 0) {
    //     useRegister(member);
    // }

    const signupHandler = ({ username, email, phone, password }, event) => {
        const member = { username, email, phone, password };
        setMember(member);
        console.log(member);
        event.target.reset();
        history.goBack();
    };

    return (
        <div className={classes.register}>
            <div className={classes.title}>
                <h3>Register</h3>
            </div>
            <form onSubmit={handleSubmit(signupHandler)} className={classes.content}>
                <div className={classes.controls}>
                    <label htmlFor="username">Username (*)</label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Uy Dung"
                        {...register("username", { required: true, minLength: 6 })}
                    />
                    {errors.username?.type === "required" && (
                        <span className={classes.error}>This field cannot be left blank</span>
                    )}
                    {errors.username?.type === "minLength" && (
                        <span className={classes.error}>Should have least 6 characters</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="phone">Phone (*)</label>
                    <input
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[0-9\-\+]{9,15}$/,
                            },
                        })}
                        type="text"
                        autoComplete="off"
                        placeholder="0398 645 078"
                    />
                    {errors.phone?.type === "required" && (
                        <span className={classes.error}>This field cannot be left blank</span>
                    )}
                    {errors.phone?.type === "pattern" && (
                        <span className={classes.error}>Invalid phone number</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">Email (*)</label>
                    <input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                        })}
                        type="text"
                        autoComplete="off"
                        placeholder="dungnguyendinh911@gmail.com"
                    />
                    {errors.email?.type === "required" && (
                        <span className={classes.error}>This field cannot be left blank</span>
                    )}
                    {errors.email?.type === "pattern" && (
                        <span className={classes.error}>Invalid email address </span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">Password (*)</label>
                    <input
                        {...register("password", {
                            required: true,
                            pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ },
                        })}
                        type="password"
                        autoComplete="off"
                    />
                    {errors.password?.type === "required" && (
                        <span className={classes.error}>This field cannot be left blank</span>
                    )}
                    {errors.password?.type === "pattern" && (
                        <span className={classes.error}>
                            Minimum eight characters, at least one letter and one number
                        </span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">Confirm Password (*)</label>
                    <input
                        {...register("passwordConfirm", {
                            required: true,
                            pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ },
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { password } = getValues();
                                    return value === password;
                                },
                            },
                        })}
                        type="password"
                        autoComplete="off"
                    />
                    {errors.passwordConfirm?.type === "required" && (
                        <span className={classes.error}>This field cannot be left blank</span>
                    )}
                    {errors.passwordConfirm?.type === "pattern" && (
                        <span className={classes.error}>
                            Minimum eight characters, at least one letter and one number
                        </span>
                    )}
                    {errors.passwordConfirm?.type === "matchesPreviousPassword" && (
                        <span className={classes.error}>Should matches with password </span>
                    )}
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
