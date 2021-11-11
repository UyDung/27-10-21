import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderForm from "../Order/OrderForm";
import { v4 as uuid_v4 } from "uuid";

const Cart = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.token);
    const listItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPriceCart).toFixed(2);
    
    const closeCartHandler = () => navigate("/");

    const goLoginHandler = () => {
        navigate("/login");
    };

    const cartItems = listItems.map((item) => (
        <li className="inline-block"><CartItem key={uuid_v4()} id={item.id} title={item.name} price={item.price} quantity={item.quantity} /></li>
    ));
    return (
        <div className={`mt-28 w-11/12 text-sm lg:w-10/12 xl:w-3/6 mx-auto py-4 px-8 grid grid-flow-row gap-4 bg-white rounded`}>
            <h3 className="text-yellow-300 text-center font-bold text-2xl md:text-3xl mb-1 md:mb-2  ">Your's Cart</h3>
            <ul className={`${classes.scrollbar} overflow-y-auto  lg:max-h-sm flex flex-col gap-2 max-h-96`} >
                <li className="sticky top-0 bg-white grid grid-flow-col text-sm md:text-xl grid-cols-5 items-center font-bold justify-between">
                    <p className="text-yellow-300">Name</p>
                    <p className="text-center text-yellow-300">Price</p>
                    <p className="text-center text-yellow-300">Quantity</p>
                    <p className="text-center text-yellow-300">Add</p>
                    <p className="text-center text-yellow-300">Delete</p>
                </li>
                {cartItems}
            </ul>
            <div className="flex font-bold justify-between">
                <h3 className="text-2xl">Total</h3>
                <span className="text-2xl"> $ {totalPrice}</span>
            </div>
            {isLoggedIn && listItems.length !== 0 && <OrderForm />}
            <div className="ml-auto">
                {!isLoggedIn && (
                    <button className=" text-sm bg-purple-500 text-white rounded  py-2 px-6  mr-4 hover:opacity-70" onClick={goLoginHandler} disabled={!listItems.length > 0}>
                        Order
                    </button>
                )}
                <button className="text-sm bg-purple-500 text-white rounded py-2 px-6 hover:opacity-70" onClick={closeCartHandler}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Cart;
