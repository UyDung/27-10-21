import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-Slice";
import cartSlice from "./cart-Slice";
import productSlice from "./products-Slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        products: productSlice.reducer,
    }
});

export default store;