import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderForm from "../Order/OrderForm";

const Cart = () => {
    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.auth.login);
    const listItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPriceCart).toFixed(2);

    const closeCartHandler = () => history.push("/");

    const goLoginHandler = () => {
        history.push("/login");
    };

    const cartItems = listItems.map((item) => (
        <CartItem key={item.id} id={item.id} title={item.name} price={item.price} quantity={item.quantity} />
    ));

    return (
        <div className="container mt-28 w-9/12 lg:w-3/6  mx-auto py-4 px-8 grid grid-flow-row gap-4 bg-white rounded">
            <h3 className="text-center font-bold text-4xl mb-4 text-yellow-300">Your's Cart</h3>
            <ul className="flex flex-col gap-2">
                <div className="grid grid-flow-col grid-cols-5 items-center font-bold justify-between">
                    <p className="text-yellow-300">Name</p>
                    <p className="text-center text-yellow-300">Price</p>
                    <p className="text-center text-yellow-300">Quantity</p>
                    <p className="text-center text-yellow-300">Add</p>
                    <p className="text-center text-yellow-300">Delete</p>
                </div>
                {listItems.length > 0 ? cartItems : <p className="text-center text-indigo-600">Empty</p>}
            </ul>
            <div className="flex font-bold justify-between">
                <h3>Total</h3>
                <span className=""> $ {totalPrice}</span>
            </div>
            {isLoggedIn && <OrderForm />}
            <div className="ml-auto">
                {!isLoggedIn && (
                    <button className=" text-sm bg-purple-500 text-white rounded  py-1 px-4  mr-4 hover:opacity-70" onClick={goLoginHandler} disabled={!listItems.length > 0}>
                        Order
                    </button>
                )}
                <button className="text-sm bg-purple-500 text-white rounded py-1 px-4 hover:opacity-70" onClick={closeCartHandler}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Cart;
