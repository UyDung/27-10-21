import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import { Grid, Box, Snackbar, Slide } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";
import { cartActions } from "../../store/cart-Slice";

const Products = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        if (!cart.isInitial) {
            setShowAlert(true);
        }

        return () => {
            dispatch(cartActions.resetInitial());
        };
    }, [cart]);

    const listProducts = products.map((product) => (
        <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.previewDescription}
            image={product.image}
            price={product.price}
        />
    ));

    const slideTransition = (props) => {
        return (
            <Slide {...props} direction="down" sx={{ mt: "5vh" }}>
                <Alert severity="success">Add success to cart</Alert>
            </Slide>
        );
    };

    return (
        <Box sx={{ bgcolor: "text.secondary" }}>
            {showAlert && (
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={300}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    TransitionComponent={slideTransition}
                />
            )}

            <CssBaseline />
            <Grid container columns={12} spacing={2} sx={{ maxWidth: "80vw", margin: "20vh  auto 0 auto" }}>
                {listProducts}
            </Grid>
        </Box>
    );
};

export default Products;
