import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { sendingData, fetchingData, transDataToLocal, getDataFromLocal } from "./store/cart-Actions";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

function App() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    {
        // useEffect(() => {
        //     dispatch(fetchingData());
        // }, [dispatch]);
        // useEffect(() => {
        //     if(!cart.isInitial) {
        //         sendingData(cart);
        //     }
        // }, [cart]);
    }

    
    useEffect(() => {
        dispatch(getDataFromLocal());
    }, []);

    useEffect(() => {
        if (!cart.isInitial) {
            transDataToLocal(cart);
        }
    }, [cart]);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/products" />
                </Route>
                <Route path="/products">
                    <Main />
                </Route>
                <Route path="/news">News</Route>
                <Route path="/about">About</Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">Register</Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
