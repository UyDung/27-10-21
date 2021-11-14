import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-Slice";

 

const CartItem = ({ quantity, title, price, id }) => {
    const dispatch = useDispatch();

    const addOneToCart = () => {
        dispatch(cartActions.addItemToCart({ title, price, id }));
    };

    const removeOneFromCart = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <div className="grid grid-flow-col grid-cols-5 items-center border-b-2 border-gray-1 my-2">
            <div className="font-bold text-sm">{title}</div>
            <div className=" text-center  text-base">{price}</div>
            <div className=" text-center  text-base">{quantity}</div>
            <div className=" text-center  text-base rounded w-8 m-auto shadow cursor-pointer text-white font-bold bg-green-500   active:bg-green-700" onClick={addOneToCart}>+</div>
            <div className=" text-center  text-base rounded w-8 m-auto shadow-lg cursor-pointer text-white font-bold bg-green-500  active:bg-green-700" onClick={removeOneFromCart}>-</div>
        </div>
    );
};

export default CartItem;
