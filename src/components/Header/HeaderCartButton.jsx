import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { BsBagCheck } from "react-icons/bs";



const HeaderCartButton = () => {
    const [badgeClasses, setBadgeClasses] = useState('absolute -top-4 -right-2 text-sm animate-ping ');
    const cartItems = useSelector((state) => state.cart.items);
    const cartQuantity = cartItems.reduce((prevValue, currentValue) => {  return prevValue + currentValue.quantity}, 0);
    const navigate = useNavigate();
    const goToCartHandler = () => navigate("/cart");
    
    return (
        <button onClick={goToCartHandler} className="flex relative text-xl">
            <span className="">
                <BsBagCheck />
            </span>
            <span className={badgeClasses}>{cartQuantity}</span>
        </button>
    );
};

export default HeaderCartButton;
