import { useEffect, useState, useRef } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { Typography, CssBaseline, Button, TextField, Box, Link, Grid } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import { login, useAuth } from "../../firebase";

const Login = () => {
    const navigate = useNavigate();
    const currentUser = useAuth();
    if (currentUser) navigate("/");
    const [errorLogin, setErrorLogin] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    });

    const loginHandler = async (data) => {
        try {
            await login(data.email, data.password);
            reset();
            navigate(-1);
        } catch (error) {
            switch (error.code) {
                case "auth/missing-email":
                    setErrorLogin("Incorrect email or password");
                    break;
                case "auth/user-not-found":
                    setErrorLogin("This email does not exit");
                    break;
                default:
                    setErrorLogin("Invalid email");
            }
        }
    };

    const inputChangeHandler = () => {
       setErrorLogin('');
    };

    return (
        <>
            <CssBaseline />
            <Box
                component="form"
                onSubmit={handleSubmit(loginHandler)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                    maxWidth: "350px",
                    margin: "20vh auto 0 auto",
                    padding: "2rem 1rem",
                    borderRadius: "5px",
                    boxShadow: 1,
                }}
            >
                <Typography sx={{ color: "#4683e4", textAlign: "center", transform: "scale(1.8)" }}>
                    <AndroidIcon />
                </Typography>
                <Typography variant="h6" size="small" sx={{ textAlign: "center" }}>
                    Sign in
                </Typography>
                <TextField
                    {...register("email", { required: "Do not empty" })}
                    onChange={inputChangeHandler}
                    error={errors.email ? true : false}
                    label="Email"
                    placeholder="user@gmail.com"
                    size="small"
                    autoComplete="off"
                />
                <Typography variant="caption" color="error">
                    {errors.email?.message}
                </Typography>

                <TextField
                    {...register("password", { required: "Do not empty" })}
                    onChange={inputChangeHandler}
                    error={errors.password ? true : false}
                    label="Password"
                    type="password"
                    size="small"
                />
                <Typography variant="caption" color="error">
                    {errors.password?.message}
                </Typography>
                <Button variant="contained" type="submit">
                    Login
                </Button>
                <Typography variant="inherit" color="error" textAlign="center">
                    {errorLogin}
                </Typography>
                <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Grid item sx={{ fontSize: "0.9rem" }}>
                        <Link href="#" underline='hover'>Forgot password?</Link>
                    </Grid>
                    <Grid item sx={{ fontSize: "0.9rem" }}>
                        <Link component={RouterLink} to='/register' underline='hover'>Don't have an account? Sign Up</Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Login;
