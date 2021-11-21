 

import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-Slice";
import { useDispatch } from "react-redux";

import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import classes from "./ProductItem.module.css";
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const useStyles = makeStyles({
    grid: {
        width: "300px",
        margin: "0 auto",
    },
    card: {
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",        
        width: "100%",
        height: '100%'
    },
    media: {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "2px",
    },
    price: {
        marginTop: "auto",
        fontWeight: "bold",
    },
    title: {
        fontWeight: "bold",
        color: "#FFA500",
        fontSize: "1.2rem",
    },
});

const ProductItem = ({ id, title, price, image, description }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
     

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({ id, title, price }));
        
    };

    return (
        <>
            <CssBaseline />
            
            <Grid item key={id} className={classes.grid} xs={12} sm={6} md={4} lg={3} >
                <Card className={classes.card}>
                    <Link to={`product-${id}`} className={classes.title}>
                        {title}
                    </Link>

                    <CardMedia component="img" image={image} alt={title} className={classes.media} />

                    <CardContent>
                        <Typography paragraph> {description}</Typography>
                        <Typography paragraph className={classes.price}>
                            $ {price}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button
                            variant="contained"
                            onClick={addToCartHandler}
                            startIcon={<AddShoppingCartIcon size="small" />}
                        >
                            Add To Cart
                        </Button>
                       
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default ProductItem;
