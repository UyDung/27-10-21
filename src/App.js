import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
 
import { transDataToLocal, getDataFromLocal } from "./store/cart-Actions";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { sendLogginState, replaceLoginState } from "./store/auth-Slice";
import Register from "./components/Register/Register";
import Product from "./pages/Product";

function App() {
     
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const loggedIn = useSelector((state) => state.auth);

    // useEffect(() => {
    //     dispatch(replaceLoginState());
    // }, [dispatch]);

    useEffect(() => {
        if (loggedIn.changed) {
            sendLogginState(loggedIn.login);
        }
    });

    useEffect(() => {
        dispatch(getDataFromLocal());
    }, [dispatch]);

    useEffect(() => {
        if (!cart.isInitial) {
            transDataToLocal(cart);
        }
    }, [cart]);

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/products" />
                </Route>
                <Route path="/products">
                    <Product />
                </Route>
                <Route path="/news">News</Route>
                <Route path="/about">About</Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
