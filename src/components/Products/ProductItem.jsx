import { Link } from 'react-router-dom';
import { cartActions } from "../../store/cart-Slice";
import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.css";

const ProductItem = ({ id, title, price, image, description }) => {
   
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({ id, title, price }));
    };

    

    return (
        <li className={`${classes.items} flex flex-col items-center rounded shadow  p-4 text-center`}>
            <Link to={`product-${id}`} className='font-bold text-lg mb-4 text-blue-400 hover:text-blue-600'>{title}</Link>
            <img src={image} alt={title} className=" rounded w-full h-48  object-cover mb-2" />
            <p className={`${classes.description} `}>{description}</p>
            <p className={`${classes.price} font-bold mt-auto mb-2`}>$ {price}</p>
            <button
                className=" rounded hover:bg-red-500 outline-none bg-blue-500 active:bg-red-700 py-1 px-3 text-white "
                onClick={addToCartHandler}
            >
                Add to Cart
            </button>
        </li>
    );
};

export default ProductItem;
