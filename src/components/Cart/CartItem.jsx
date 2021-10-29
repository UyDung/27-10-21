import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";

import classes from "./CartItem.module.css";

const CartItem = ({ quantity, title, price, id }) => {
    const dispatch = useDispatch();

    const addOneToCart = () => {
        dispatch(cartActions.addItemToCart({ title, price, id }));
    };

    const removeOneFromCart = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <li className={classes["cart-item"]}>
            <div className="name">{title}</div>
            <div className="price">{price}</div>
            <div className="quantity">{quantity}</div>
            <div className="btn" onClick={addOneToCart}>
                +
            </div>
            <div className="btn" onClick={removeOneFromCart}>
                -
            </div>
        </li>
    );
};

export default CartItem;
