import React, { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useAuth, logout } from "../../../firebase";

import {
    Link,
    IconButton,
    Toolbar,
    Typography,
    Box,
    AppBar,
    Button,
    Menu,
    MenuItem,
    Badge,
    Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentUser, setCurrentUser] = useState();
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const currentU = useAuth();
    const carts = useSelector((state) => state.cart.items);
    let numberCart = carts.reduce((prevValue, currentItem) => {
        return prevValue + currentItem.quantity;
    }, 0);

    useEffect(() => {
        setCurrentUser(currentU?.email);
    });

    const logoutHandler = () => {
        menuCloseHandler();
        logout();
        setCurrentUser();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const loginOpenHandler = () => {
        menuCloseHandler();
        navigate("/login");
    };

    const registerOpenHandler = () => {
        menuCloseHandler();
        navigate("/register");
    };

    const menuCloseHandler = () => {
        setAnchorEl(null);
    };

    const cartOpenHandler = () => {
        navigate("/cart");
    };

    return (
        <Box>
            <AppBar sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: "block", sm: "none", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ textDecoration: "none" }}>
                        <Link
                            component={RouterLink}
                            to="/"
                            sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "red" } }}
                        >
                            Cake
                        </Link>
                    </Typography>

                    <Box
                        component="div"
                        sx={{ display: { xs: "none", sm: "flex", md: "flex" }, mr: "auto", ml: "auto" }}
                    >
                        <Typography variant="string" component="div" sx={{ mr: "2rem" }}>
                            <Link
                                component={RouterLink}
                                to="/products"
                                sx={{
                                    color: "inherit",
                                    padding: "1rem",
                                    textDecoration: "none",
                                    "&:hover": {
                                        opacity: "0.7",
                                    },
                                }}
                            >
                                Products
                            </Link>
                        </Typography>
                        <Typography variant="string" component="div" sx={{ mr: "2rem" }}>
                            <Link
                                component={RouterLink}
                                to="/news"
                                sx={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    padding: "1rem",
                                    "&:hover": {
                                        opacity: "0.7",
                                    },
                                }}
                            >
                                News
                            </Link>
                        </Typography>
                        <Typography variant="string" component="div">
                            <Link
                                component={RouterLink}
                                to="/about"
                                sx={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    padding: "1rem",
                                    "&:hover": {
                                        opacity: "0.7",
                                    },
                                }}
                            >
                                About
                            </Link>
                        </Typography>
                    </Box>

                    <Tooltip title="Your cart">
                        <Badge
                            onClick={cartOpenHandler}
                            badgeContent={numberCart}
                            color="secondary"
                            sx={{ mr: "2rem", xs: { ml: "auto" }, cursor: "pointer", padding: "0.2rem" }}
                        >
                            <ShoppingCartOutlinedIcon
                                color="action"
                                sx={{
                                    "&:hover": {
                                        color: "violet",
                                    },
                                }}
                            />
                        </Badge>
                    </Tooltip>
                    
                    <Button
                        color="inherit"
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        {currentUser !== undefined ? (
                            currentUser
                        ) : (
                            <Tooltip title="Your account">
                                <AccountCircleIcon />
                            </Tooltip>
                        )}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={menuCloseHandler}
                        aria-expanded={open ? "true" : undefined}
                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                    >
                        {currentUser === undefined && (
                            <>
                                <MenuItem onClick={loginOpenHandler}>Login</MenuItem>
                                <MenuItem onClick={registerOpenHandler}>Register</MenuItem>
                            </>
                        )}

                        {currentUser !== undefined && <MenuItem onClick={logoutHandler}>Logout</MenuItem>}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;

{
    {
        /* <div className="">
    <HeaderCartButton />
</div>

<div>
   Current user:  {currentUser?.email }
</div>
<div className="flex items-center content-between">
    {currentUser === null && (
        <Link to="/login" className="hover:text-red-500 mr-1 text-sm">
            <button className="" id="login">
            Sign in
            </button>
        </Link>
    )}

    {currentUser !== null && (
        <button onClick={logoutHandler} className="hover:text-red-500 text-sm" id="logout">
            Logout
        </button>
   )}  

    {currentUser === null && (
        <Link className="hover:text-red-500  text-sm" to="/register">
            <button className="" id="register">
                Register
            </button>
        </Link>
    )}
</div>
</header> */
    }
}
