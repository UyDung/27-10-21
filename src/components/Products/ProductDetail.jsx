import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";
import productApi from "../../api/productApi";

import classes from "./ProductDetail.module.css";
import { Button, Box, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({ id, title, price }));
    };

    return (
        <Box component='div' sx={{margin: '20vh auto 0 auto', maxWidth: '70vw', display: 'flex', gap: '3rem'}}>
            <Box component='div' >
                <img src={image} alt={title} />
            </Box>
            <Box sx={{}}>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography sx={{lineHeight: '1.7'}}>{detailDescription}</Typography>
                <Typography mb={1}>$ {price}</Typography>
                <Button variant='contained' onClick={addToCartHandler} startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
            </Box>
        </Box>
    );
};

export default ProductDetail;
