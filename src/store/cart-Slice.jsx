import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isInitial: true,
    items: [],
    totalPriceCart: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.isInitial = false;
            const newItem = action.payload;
            state.totalPriceCart += newItem.price;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPriceOfItem += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalPriceOfItem: newItem.price,
                });
            }
        },
        replaceCart(state, action) {
             state.items = action.payload.items;
             state.totalPriceCart  = action.payload.totalPriceCart;
             state.isInitial= true;
        },
        removeItemFromCart(state, action) {
            state.isInitial = false;
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalPriceCart -= existingItem.price;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPriceOfItem -= existingItem.price;
            }
        },
    },
});
 

export const cartActions = cartSlice.actions;
export default cartSlice;
