import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";

 

const CartItem = ({ quantity, title, price, id }) => {
    const dispatch = useDispatch();

    const addOneToCart = () => {
        dispatch(cartActions.addItemToCart({ title, price, id }));
    };

    const removeOneFromCart = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <li className="grid grid-flow-col grid-cols-5 items-center border-b-2 border-gray-1 ">
            <div className="font-bold text-sm">{title}</div>
            <div className=" text-center  text-sm">{price}</div>
            <div className=" text-center  text-sm">{quantity}</div>
            <div className=" text-center  text-sm rounded w-8 m-auto shadow-lg cursor-pointer hover:bg-gray-100" onClick={addOneToCart}>+</div>
            <div className=" text-center  text-sm rounded w-8 m-auto shadow-lg cursor-pointer  hover:bg-gray-100" onClick={removeOneFromCart}>-</div>
        </li>
    );
};

export default CartItem;
