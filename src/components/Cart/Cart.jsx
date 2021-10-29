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
        <div className={classes.cart}>
            <h3>Your's Cart</h3>
            <ul className={classes["cart-items"]}>
                <div className={classes.title}>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Add</p>
                    <p>Delete</p>
                </div>
                {listItems.length > 0 ? cartItems : <p>Nothing</p>}
            </ul>
            <div className={classes.total}>
                <h3>Total</h3>
                <span className={classes["totalprice"]}> {totalPrice}</span>
            </div>
            {isLoggedIn && <OrderForm />}
            <div className={classes.actions}>
                {!isLoggedIn && (
                    <button className="btn" onClick={goLoginHandler} disabled={!listItems.length > 0}>
                        Order
                    </button>
                )}
                <button className="btn" onClick={closeCartHandler}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Cart;
