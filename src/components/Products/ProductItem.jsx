import css from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-Slice";
import { useDispatch } from "react-redux";

const ProductItem = ({ id, title, price, image, description }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch( cartActions.addItemToCart({ id, title, price}) );
    };

    return (
        <li className={css.product}>
            <p className={css.title}>{title}</p>
            <img src={image} alt={title} />
            <p className={css.description}>{description}</p>
            <p className={css["price"]}>$ {price}</p>
            <button className={css.btn} onClick={addToCartHandler}>
                Add to Cart
            </button>
        </li>
    );
};

export default ProductItem;
