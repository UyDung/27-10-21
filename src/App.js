import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { productActions } from "./store/products-Slice";
import productApi from "./api/productApi";
import app from "./firebase";
import { transDataToLocal, getDataFromLocal } from "./store/cart-Actions";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { sendLogginState, replaceLoginState } from "./store/auth-Slice";
import Register from "./components/Register/Register";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import ProductDetail from "./components/Products/ProductDetail";

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

    useEffect( async() => {
        const fetchingProducts = async () => {
            const responseData = await productApi.getAll();
            let data = [];
            for (const key in responseData) {
                data.push(responseData[key]);
            } 
            return data;
        };

        try {
            const productList = await fetchingProducts();
            dispatch(productActions.replaceProducts(productList));           
        } catch (error) {
            console.log("Some thing went wrong " + error);
        }
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/news">News</Route>
                <Route path="/about">About</Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
