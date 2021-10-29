import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-Slice";
import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {   
    const isLoggedIn = useSelector((state) => state.auth.login);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logoutHandler());
    };

    return (
        <header className={css.header}>
            <div className={css.logo}>
                <NavLink to="/">
                    <h1>Cake</h1>
                </NavLink>
            </div>

            <nav className={css["main-menu"]}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>

            <div className={css["cart-btn"]}>
                <HeaderCartButton />
            </div>

            <div className={css.login}>
                {!isLoggedIn && (
                    <Link to="/login">
                        <button className="btn" id="login">
                            Login
                        </button>
                    </Link>
                )}

                {isLoggedIn && (
                    <button onClick={logoutHandler} className="btn" id="logout">
                        Logout
                    </button>
                )}

                {!isLoggedIn && (
                    <Link to="/register">
                        <button className="btn" id="register">
                            Register
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
