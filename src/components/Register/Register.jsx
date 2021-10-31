import { useForm } from "react-hook-form";
import classes from "./Register.module.css";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });

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
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Uy Dung"
                        {...register("username", { required: "Do not empty and at least 6 character", minLength: 6 })}
                    />
                    {errors.username?.type === "required" && (
                        <span className={classes.error}>{errors.username.message}</span>
                    )}
                    {errors.username?.type === "minLength" && (
                        <span className={classes.error}>{errors.username.message}</span>
                    )}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="phone">
                        Phone <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        {...register("phone", { required: true })}
                        type="text"
                        autoComplete="off"
                        placeholder="0398 645 078"
                    />
                    {errors.phone && <span className={classes.error}>Do not empty</span>}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Email<span className={classes.error}>(*)</span>
                    </label>
                    <input
                        {...register("email", { required: true })}
                        type="text"
                        autoComplete="off"
                        placeholder="dungnguyendinh911@gmail.com"
                    />
                    {errors.email && <span className={classes.error}>Do not empty</span>}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Password <span className={classes.error}>(*)</span>
                    </label>
                    <input {...register("password", { required: true })} type="password" autoComplete="off" />
                    {errors.password && <span className={classes.error}>Do not empty</span>}
                </div>

                <div className={classes.controls}>
                    <label htmlFor="">
                        Confirm Password <span className={classes.error}>(*)</span>
                    </label>
                    <input
                        {...register("passwordConfirm", { required: true })}
                        type="password"
                        autoComplete="off"
                    />
                    {errors.passwordConfirm?.type === "required" && (
                        <span className={classes.error}>Do not empty</span>
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
