import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { signup, useAuth } from "../../firebase";

const Register = () => {
    const currentUser = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,

        formState: { errors },
    } = useForm({ mode: "all" });

    useEffect(() => {
        if (currentUser) navigate("/");
    }, [currentUser]);

    const signupHandler = async ({ email, password }) => {
        setIsLoading(true);
        try {
            await signup(email, password);
        } catch (error) {
            alert(error);
        }
        setIsLoading(false);

        navigate("/");
    };

    return (
        <div className="w-80  my-28 mx-auto p-4 box-shadow rounded bg-white">
            <div className="">
                <h3 className="mb-4 text-center font-bold text-2xl">Register</h3>
            </div>
            <form onSubmit={handleSubmit(signupHandler)} className="flex flex-col gap-2">
                <div className="">
                    <label htmlFor="" className="text-md">
                        Email (*)
                    </label>
                    <input
                        className="outline-none border-2 rounded w-full py-1 px-2"
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
                        <p className="text-red-500 italic text-sm">This field cannot be left blank</p>
                    )}
                    {errors.email?.type === "pattern" && (
                        <p className="text-red-500 italic text-sm">Invalid email address </p>
                    )}
                </div>

                <div className="">
                    <label htmlFor="" className="text-md">
                        Password (*)
                    </label>
                    <input
                        className="outline-none border-2 rounded w-full py-1 px-2"
                        {...register("password", {
                            required: true,
                            pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ },
                        })}
                        type="password"
                        autoComplete="off"
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-red-500 italic text-sm">This field cannot be left blank</p>
                    )}
                    {errors.password?.type === "pattern" && (
                        <p className="text-red-500 italic text-sm">
                            Minimum eight characters, at least one letter and one number
                        </p>
                    )}
                </div>

                <div className="">
                    <label htmlFor="" className="text-md">
                        Confirm Password (*)
                    </label>
                    <input
                        className="outline-none border-2 rounded w-full py-1 px-2"
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
                        <p className="text-red-500 italic text-sm">This field cannot be left blank</p>
                    )}
                    {errors.passwordConfirm?.type === "pattern" && (
                        <p className="text-red-500 italic text-sm">
                            Minimum eight characters, at least one letter and one number
                        </p>
                    )}
                    {errors.passwordConfirm?.type === "matchesPreviousPassword" && (
                        <p className="text-red-500 italic text-sm">Should matches with password </p>
                    )}
                </div>

                <div className="ml-auto">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded border-2 mr-4 px-2 py-1 bg-blue-500 text-gray-300 hover:bg-indigo-600"
                    >
                        Sign Up
                    </button>
                    <Link
                        to="/"
                        className="rounded border-2 px-2 py-1 bg-blue-500 text-gray-300 hover:bg-indigo-600"
                    >
                        Close
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
