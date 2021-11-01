import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-Slice";

import classes from "./Login.module.css";
import { fetchingData } from "../../store/cart-Actions";
// 1 Nhap username password
//2 Tim kiem trong mang data tren firebase xem co username va password do khong ?
//3 Co thi login, khong co thi bao sai username password, nhap lai ko duoc thi email de change password

const firebaseLink = "https://project-2532894124166455430-default-rtdb.firebaseio.com/members.json";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.auth);    
    const [errorLogin, setErrorLogin] = useState("");
    const [members, setMembers] = useState([]);

    const fetchingMembers = async () => {
        const response = await fetch(firebaseLink);
        if (!response.ok) {
            throw new Error("Can not fetching members");
        }

        const responseData = await response.json();
        let data = [];
        for (const key in responseData) {
            data.push(responseData[key]);
        }

        return data;
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            username: "uydung",
            password: "",
        },
    });

    useEffect(() => {
        if (isLoggedIn ) {
            history.push("/");
        }
    },[isLoggedIn]);

    useEffect(async () => {
        try {
            const data = await fetchingMembers();
            setMembers(data);
        } catch (error) {
            console.log(error.message);
        }
    }, []);

   

    const validateLoginHandler = (username, password) => {
        //1 check data empty or not
        if (members.length === 0) {
            console.log("data empty");
            return;
        }
        const existingMember = members.find((member) => {
            return member.username === username && member.password === password;
        });
        return existingMember;
    };

    const errorResetHandler = () => {
        setErrorLogin("");
    };

    const formSubmitHandler = (data, event) => {
        const result = validateLoginHandler(data.username, data.password);
        if (result !== undefined) {
            dispatch(authActions.loginHandler());
        } else {
            dispatch(authActions.logoutHandler());
            setErrorLogin("Username or password is incorrect!");
        }
    };

    return (
        <form onSubmit={handleSubmit(formSubmitHandler)} className={classes.login}>
            <h3>Login Form</h3>

            <div className={classes.controls}>
                <input
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    {...register("username", { required: true })}
                    onChange={errorResetHandler}
                />
                {errors.username?.type === "required" && (
                    <span className={classes.error}>This field do not empty</span>
                )}
            </div>
            <div className={classes.controls}>
                <input
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    onChange={errorResetHandler}
                />
                {errors.password?.type === "required" && (
                    <span className={classes.error}>This field do not empty</span>
                )}
            </div>

            <span className={classes.error}>{errorLogin}</span>

            <div className={classes.actions}>
                <button className="btn">Sign in</button>
            </div>
            <Link to="/forgotPassword" style={{ color: "blue" }}>
                Need help?
            </Link>
        </form>
    );
};

export default Login;
