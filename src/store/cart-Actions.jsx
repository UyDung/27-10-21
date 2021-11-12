import { cartActions } from "./cart-Slice";

const firebaseLink = "https://project-2532894124166455430-default-rtdb.firebaseio.com";
const LOCAL_KEY = "cart";

export const sendingData = async (cart) => {
    const sendRequest = async () => {
        const response = await fetch(`${firebaseLink}/cart.json`, {
            method: "PUT",
            body: JSON.stringify({ items: cart.items, totalPriceCart: cart.totalPriceCart }),
        });

        if (!response.ok) {
            throw new Error("Some thing went wrong");
        }

        return "Send success";
    };

    try {
        const message = await sendRequest();
        console.log(message);
    } catch (error) {
        console.log("Not success");
    }
};

export const fetchingData = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(`${firebaseLink}/cart.json`);

            if (!response.ok) {
                throw new Error("Some thing went wrong");
            }

            const data = await response.json();
            return data;
        };

        try {
            const data = await sendRequest();
            dispatch(cartActions.replaceCart(data));
            console.log("Fetching success");
        } catch (error) {
            console.log("Fetching not success");
        }
    };
};

export const transDataToLocal = (cart) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ items: cart.items, totalPriceCart: cart.totalPriceCart }));
};

export const getDataFromLocal = () => {
    return (dispatch) => {
        const data = localStorage.getItem(LOCAL_KEY);
        // dispatch(cartActions.replaceCart(data));
        console.log(data);
    }
};
