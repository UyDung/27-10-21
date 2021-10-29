import classes from "./OrderForm.module.css";

const OrderForm = () => {
    const today = new Date();
    console.log(today);
    const mindate = today;
    


    return (
        <form className={classes.order}>
            <h3>Delivery To</h3>
            <div className={classes.controls}>
                <label htmlFor="username">Received Person</label>
                <input type='text' name="username"  placeholder='Enter your name'/>
            </div>
            <div className={classes.controls}>
                <label htmlFor="address">Delivery Address</label>
                <textarea name="address" id="address"  />
            </div>

            <div className={classes.controls}>
                <label htmlFor="address">Time of Delivery</label>
               <input type="date" min={mindate} />
            </div>
            <div className={classes.controls}>
                <label htmlFor="address">Remarks</label>
                <textarea name="remark" id="address" />
            </div>
            <div className={classes.controls}>
                <label htmlFor="phone">Phone Number</label>
                <input type='number' name="phone" id="phone" />
            </div>
            <div className={classes.actions}>
                <button >Order</button>
            </div>
        </form>
    );
};

export default OrderForm;
