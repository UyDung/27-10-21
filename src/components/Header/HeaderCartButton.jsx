import { useSelector } from "react-redux";

import { useHistory } from "react-router";

import { BsBagCheck } from "react-icons/bs";

import css from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartQuantity = cartItems.reduce((prevValue, currentValue) => {  return prevValue + currentValue.quantity}, 0);

    const history = useHistory();

    const goToCartHandler = () => history.push("/cart");

    return (
        <button onClick={goToCartHandler} className={css.btn}>
            <span className={css.title}>
                <BsBagCheck />
            </span>
            <span className={css.badge}>{cartQuantity}</span>
        </button>
    );
};

export default HeaderCartButton;
