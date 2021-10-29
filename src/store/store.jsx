import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-Slice";
import cartSlice from "./cart-Slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
    }
});

export default store;