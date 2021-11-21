import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

// import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Button,
    CssBaseline,
    Typography,
    TableFooter,
} from "@mui/material";

const Cart = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.token);
    const listItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPriceCart).toFixed(2);

    const closeCartHandler = () => navigate("/");

    const goLoginHandler = () => {
        navigate("/login");
    };

 
    return (
        <>
            <CssBaseline />
            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: "650px",
                    maxHeight: "500px",
                    marginTop: "20vh",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <Table aria-label="cart table" stickyHeader>
                    <TableHead sx={{ zIndex: 10, backgroundColor: "black", color: "white" }}>
                        <TableRow>
                            <TableCell>Product's Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Add more</TableCell>
                            <TableCell>Remove one</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {listItems.map((item) => (
                            <CartItem key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.name} />
                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">Total</Typography>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <Typography variant="h6">$ {totalPrice}</Typography>
                            </TableCell>
                        </TableRow>
                        {isLoggedIn && listItems.length !== 0 && <OrderForm />}
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                {!isLoggedIn && (
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={goLoginHandler}
                                        disabled={!listItems.length > 0}
                                    >
                                        Checkout
                                    </Button>
                                )}
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" size="small" onClick={closeCartHandler}>
                                    Close
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </ >
    );
};

export default Cart;
