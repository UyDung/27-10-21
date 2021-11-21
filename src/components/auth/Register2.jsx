import React, { useState, useEffect } from 'react';

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Link, Checkbox, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup, useAuth } from '../../firebase';

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email syntax"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Comfirm Password does not match"),
    acceptTerms: yup.bool().oneOf([true], "Accept Terms is required"),
});

const Register2 = () => {
    const [errorRegister, setErrorRegister]  =    useState('');
    const currentUser = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) navigate(-1);
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const loginHandler =  async (data) => {
         try {
             await signup(data.email, data.password);             
         } catch (error) {
             setErrorRegister('Email already in use');
         }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(loginHandler)}
            sx={{
                boxShadow: 1,
                width: "300px",
                margin: "20vh auto 0 auto",
                padding: " 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Typography variant="h6" sx={{ textAlign: "center", mb: "1rem" }}>
                Register New Account
            </Typography>
            <TextField
                {...register("email")}
                name="email"
                label="Email"
                size="small"
                fullWidth
                error={errors.email}
                autoComplete="off"
            />
            <Typography sx={{ color: "error.main", fontSize: "0.9rem", fontStyle: "italic" }}>
                {errors.email && errors.email.message}
            </Typography>
            <TextField
                {...register("password")}
                name="password"
                label="Password"
                type="password"
                size="small"
                fullWidth
                error={errors.password}
            />
            <Typography sx={{ color: "error.main", fontSize: "0.9rem", fontStyle: "italic" }}>
                {errors.password && errors.password.message}
            </Typography>
            <TextField
                {...register("confirmPassword")}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                size="small"
                fullWidth
                error={errors.confirmPassword}
            />
            <Typography sx={{ color: "error.main", fontSize: "0.9rem", fontStyle: "italic" }}>
                {errors.confirmPassword && errors.confirmPassword.message}
            </Typography>
            <Box>
                <Checkbox {...register("acceptTerms")} />
                <Typography sx={{ fontSize: "0.8rem", display: "inline" }}>
                    I have read and agree to the Terms
                </Typography>
            </Box>
            <Typography sx={{ color: "error.main", fontSize: "0.9rem", fontStyle: "italic" }}>
                {errors.acceptTerms && errors.acceptTerms.message}
            </Typography>
            <Button type="submit" variant="contained" sx={{ mb: "1rem" }}>
                Register
            </Button>
            <Typography sx={{color: 'error.main', textAlign: 'center'}}>{errorRegister}</Typography>
            <Link component={RouterLink} to="/login" underline="hover" sx={{ textAlign: "center" }}>
                Have account ( Login )
            </Link>
            
        </Box>
    );
};

export default Register2;
