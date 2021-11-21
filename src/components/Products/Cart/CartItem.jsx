import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-Slice";

import { TableRow, TableCell, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = ({ quantity, title, price, id }) => {
    const dispatch = useDispatch();

    const addOneToCart = () => {
        dispatch(cartActions.addItemToCart({ title, price, id }));
    };

    const removeOneFromCart = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <TableRow key={id}>
            <TableCell>{title}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>
                <Button><AddCircleIcon onClick={addOneToCart}  /></Button>
            </TableCell>
            <TableCell>
               <Button> <RemoveCircleOutlineIcon onClick={removeOneFromCart} /></Button>
            </TableCell>
        </TableRow>
    );
};

export default CartItem;
