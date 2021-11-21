import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { productActions } from "./store/products-Slice";
import productApi from "./api/productApi";

import New from "../src/pages/News";
import { transDataToLocal } from "./store/cart-Actions";
import Cart from "./components/products/Cart/Cart";
import Header from "./components/layout/Header/Header";
import Login from "./components/auth/Login";
import Register2 from "./components/auth/Register2";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import ProductDetail from "./components/products/ProductDetail";

import { getDataFromLocal } from "./store/cart-Actions";

function App() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        try {
            dispatch(getDataFromLocal());
        } catch (error) {
            console.log(error + " Loi ");
        }

        document.title = "27-10-2021";
    }, []);

    useEffect(() => {
        if (!cart.isInitial) {
            transDataToLocal(cart);
        }
    }, [cart]);

    useEffect(async () => {
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
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/news" element={<New />} />
                <Route path="/about">About</Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register2 />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
