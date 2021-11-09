import Header from '../components/Admin/Header';
import Sidebar from '../components/Admin/Sidebar';
import classes from './Admin.module.css';

const Admin = () => {
    return (
        <div className={`${classes.admin}  mt-20 mx-auto border-2`}>
            <h1>Admin page</h1>
             <Sidebar />
             <Header />
        </div>
    )
}

export default Admin;
