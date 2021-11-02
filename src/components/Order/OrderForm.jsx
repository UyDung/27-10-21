import classes from "./OrderForm.module.css";

const OrderForm = () => {
    const today = new Date();
    console.log(today);
    const mindate = today;
    


    return (
        <form className="flex flex-col gap-2 ">
            <h3>Delivery To</h3>
            <div className="group  flex">
                <label htmlFor="username">Received Person</label>
                <input className="p-2 outline-none border-2 w-3/4 ml-auto" type='text' name="username"  placeholder='Enter your name'/>
            </div>
            <div className="group  flex">
                <label htmlFor="address">Delivery Address</label>
                <textarea className="p-2 outline-none border-2 w-3/4 ml-auto" name="address" id="address"  />
            </div>

            <div className="group flex ">
                <label htmlFor="address">Time of Delivery</label>
               <input className="p-2 outline-none border-2 w-3/4 ml-auto" type="date" min={mindate} />
            </div>
            <div className="group  flex">
                <label htmlFor="address">Remarks</label>
                <textarea className="p-2 outline-none border-2 w-3/4 ml-auto" name="remark" id="address" />
            </div>
            <div className="group  flex">
                <label htmlFor="phone">Phone Number</label>
                <input className="p-2 outline-none border-2 w-3/4 ml-auto" type='text' name="phone" id="phone" />
            </div>
            
                <button className=" rounded ml-auto py-1 px-6 bg-purple-500 text-white active:bg-purple-700 ">Order</button>
            
        </form>
    );
    
};

export default OrderForm;
