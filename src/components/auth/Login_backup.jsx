import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography, CssBaseline, Button, TextField, Container, Box } from "@mui/material";
import { login, useAuth } from "../../firebase";
import { authActions } from "../../store/auth-Slice";
import classes from "./Login.module.css";
// import { fetchingData } from "../../store/cart-Actions";
// 1 Nhap username password
//2 Tim kiem trong mang data tren firebase xem co username va password do khong ?
//3 Co thi login, khong co thi bao sai username password, nhap lai ko duoc thi email de change password

const Login = () => {
    const navigate = useNavigate();
    const currentUser = useAuth();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.token);
    const [errorLogin, setErrorLogin] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    });

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    });

    const loginHandler = async (data) => {
        try {
            await login(data.username, data.password);
            navigate(-1);
        } catch (error) {
            error.code === "auth/user-not-found"
                ? setErrorLogin("Incorrect email or password")
                : setErrorLogin("Error: " + error.code);
        }
    };

    const errorResetHandler = () => {
        setErrorLogin("");
    };

    return (
        <form
            onSubmit={handleSubmit(loginHandler)}
            className=" mt-40 mx-auto w-80  bg-white rounded shadow py-4  px-6 flex flex-col gap-6 items-center"
        >
            <h3 className="text-2xl font-bold">Login Form</h3>
            <div className={classes.controls}>
                <input
                    className={`w-full border-2 px-1 py-2  outline-none `}
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    {...register("username", { required: true, onChange: errorResetHandler })}
                />
                {errors.username?.type === "required" && (
                    <span className="text-red-500 italic text-sm">This field do not empty</span>
                )}
            </div>
            <div className={classes.controls}>
                <input
                    className={`w-full border-2 px-1 py-2 outline-none`}
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    {...register("password", { required: true, onChange: errorResetHandler })}
                />
                {errors.username?.type === "required" && (
                    <span className="text-red-500 italic text-sm">This field do not empty</span>
                )}
            </div>
            {errorLogin !== "" && <span className="text-red-500 italic text-sm">{errorLogin}</span>}
            <div className="">
                <button type="submit" className="bg-blue-600 text-white rounded px-6 pt-1 pb-2 hover:bg-red-500">
                    Sign in
                </button>
            </div>
            <Link to="/forgotPassword" className="text-blue-400 hover:text-red-700">
                Need help?
            </Link>
        </form>
    );
};

export default Login;
