import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

const OrderForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const dateChangeHandler = (date) => setStartDate(date);

    return (
        <form className="flex flex-col gap-2 ">
            <h3 className="text-center font-bold text-2xl">Delivery To</h3>
            <div className="group  flex">
                <label htmlFor="username">Received Person</label>
                <input
                    className="p-2 outline-none border-2 w-3/4 ml-auto"
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                />
            </div>
            <div className="group  flex">
                <label htmlFor="address">Delivery Address</label>
                <textarea className="p-2 outline-none border-2 w-3/4 ml-auto" name="address" id="address" />
            </div>

            <div className="group flex items-center">
                <label htmlFor="address ">Time of Delivery</label>
                <div className="border-2  ml-auto">
                    {" "}
                    <DatePicker selected={startDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="group  flex">
                <label htmlFor="address">Remarks</label>
                <textarea className="p-2 outline-none border-2 w-3/4 ml-auto" name="remark" id="address" />
            </div>
            <div className="group  flex">
                <label htmlFor="phone">Phone Number</label>
                <input className="p-2 outline-none border-2 w-3/4 ml-auto" type="text" name="phone" id="phone" />
            </div>

            <button className=" rounded ml-auto py-1 px-6 bg-purple-500 text-white active:bg-purple-700 ">
                Order
            </button>
        </form>
    );
};

export default OrderForm;
