import React, { useState } from 'react'

import DatePicker from 'react-datepicker';

import Header from '../components/auth/Admin/Header';
import Sidebar from '../components/auth/Admin/Sidebar';
import classes from './Admin.module.css';

const Admin = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={`${classes.admin}  mt-20 mx-auto border-2`}>
            <h1>Admin page</h1>
             <Sidebar />
             <Header />
             <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border-2 bg-red-400"/> 
        </div>
    )
}

export default Admin;
