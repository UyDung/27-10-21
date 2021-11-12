import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";
import productApi from "../../api/productApi";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const productId = +params.productId.split("-")[1];
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchingProduct = async () => {
            const products = await productApi.getAll();
            for (const key in products) {
                if (products[key].id === productId) {
                    setProduct(products[key]);
                    return;
                }
            }
        };
        try {
            fetchingProduct();
        } catch (error) {
            console.error("Some thing went wrong: " + error);
        }
    }, [productId]);

    const { id, title, detailDescription, image, price } = product;

    const addToCartHandler = (event) => {
        dispatch(cartActions.addItemToCart({ id, title, price }));
    };

    return (
        <div className={`${classes["product-detail"]} w-9/12 m-auto mt-40 flex gap-4`}>
            <div className="lef w-1/2 flex flex-col items-center ">
                <img src={image} alt={title} className=" rounded  w-full h-full object-cover mb-2" />
            </div>
            <div className="right w-1/2   flex flex-col items-start justify-start ">
                <h3 to={`product-${id}`} className={`${classes.title} font-bold text-lg mb-4 }`}>
                    {title}
                </h3>
                <p className={`${classes.description} `}>{detailDescription}</p>
                <p className={`${classes.price} font-bold  mb-2`}>$ {price}</p>
                <button
                    className=" rounded hover:bg-red-500 bg-blue-500 active:bg-red-700 py-1 px-3 text-white "
                    onClick={addToCartHandler}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
