import { useForm } from "react-hook-form";

import classes from "./Register.module.css";

const Register = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const { password } = getValues();

    const signupHandler = (data) => {
        console.log(data);
    };

    return (
        <div className={classes.register}>
            <div className={classes.title}>
                <h3>Register</h3>
            </div>
            <form onSubmit={handleSubmit(signupHandler)} className={classes.content}>
                <div className={classes.controls}>
                    <label htmlFor="username">
                        Username <span className={classes.error}>(*)</span>
                    </label>
                    <input type="text" autoComplete="off" {...register("username", { required: true })} />
                    {errors.username?.type === "required" && (
                        <span className={classes.error}>Username can not be empty</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="phone">
                        Phone <span className={classes.error}>(*)</span>{" "}
                    </label>
                    <input type="text" autoComplete="off" {...register("phone", { required: true })} />
                    {errors.phone?.type === "required" && (
                        <span className={classes.error}>Phone can not be empty</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Email<span className={classes.error}>(*)</span>
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        {...register("email", {
                            required: true,
                            patern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Wrong email syntax",
                            },
                        })}
                    />
                    {errors.email?.type === "required" && (
                        <span className={classes.error}>Email can not be empty</span>
                    )}
                    {errors.email?.type === "patern" && <span className={classes.error}>Wrong email syntax</span>}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Password <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        type="password"
                        autoComplete="off"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.password?.type === "required" && (
                        <span className={classes.error}>Password can not be empty</span>
                    )}
                    {errors.password?.type === "minLength" && (
                        <span className={classes.error}>Password must be greater than 6 character</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Confirm Password <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        type="password"
                        autoComplete="off"
                        {...register("passwordConfirm", {
                            required: true,
                            minLength: 6,
                            validate: (value) => password === value || "Password should match !",
                        })}
                    />
                    {errors.passwordConfirm?.type === "required" && (
                        <span className={classes.error}>Confirm password can not be empty</span>
                    )}
                    {errors.passwordConfirm?.type === "minLength" && (
                        <span className={classes.error}>Password must be greater than 6 character</span>
                    )}
                    {errors.passwordConfirm?.type === "validate" && (
                        <span className={classes.error}>{errors.passwordConfirm.message}</span>
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
