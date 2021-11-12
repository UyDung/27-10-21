import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { productActions } from "./store/products-Slice";
import productApi from "./api/productApi";
import app from "./firebase";
import { transDataToLocal } from "./store/cart-Actions";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import ProductDetail from "./components/Products/ProductDetail";
import { authActions } from "./store/auth-Slice"; 
import { getDataFromLocal } from "./store/cart-Actions";

function App() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const token = localStorage.getItem(process.env.REACT_APP_LOCAL_KEY);

    useEffect(() => {
        if (token) {
            dispatch(authActions.loginHandler(token));
        }
       
    }, [dispatch]);

    useEffect(() => {
      getDataFromLocal();
    });
  
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
            const productList =  await fetchingProducts();
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
