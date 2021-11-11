import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-Slice";
import { Link, NavLink } from "react-router-dom";
 
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {   
    const isLoggedIn = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logoutHandler());
    };

    return (
        <header className="h-16 flex items-center justify-between border-2 w-screen px-4 md:px-10  shadow-sm  fixed top-0 z-50 bg-white  ">
            <div className="md:text-2xl md:font-bold">
                <NavLink to="/">
                    <h1>Cake</h1>
                </NavLink>
            </div>

            <nav className="hidden md:block">
                <ul className="flex items-center justify-between gap-10">
                    <li>
                        <NavLink to="/" className="hover:text-red-400 ">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="hover:text-red-400 ">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className="hover:text-red-400 ">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-red-400 ">About</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="">
                <HeaderCartButton />
            </div>

            <div className="flex items-center content-between">
                {!isLoggedIn && (
                    <Link to="/login" className="hover:text-red-500 mr-1 text-sm">
                        <button className="" id="login">
                        Sign in
                        </button>
                    </Link>
                )}

                {isLoggedIn && (
                    <button onClick={logoutHandler} className="hover:text-red-500 text-sm" id="logout">
                        Logout
                    </button>
                )}

                {!isLoggedIn && (
                    <Link className="hover:text-red-500  text-sm" to="/register">
                        <button className="" id="register">
                            Register
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
