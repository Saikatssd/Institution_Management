import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './admin.css'
import { toast } from 'react-hot-toast';
// import { Context } from '../../main.jsx'

export default function AdminDashboard() {
    // const {isAuthenticated, setIsAuthenticated} = useContext(Context);
    // console.log(isAuthenticated);
    // const LogoutHandler = async (e) => {

    //     e.preventDefault();
    //     try {

    //       // const {data}= axios.post(`${server}/AdminLogin`,
    //       const {data} = await axios.get(
    //         'http://localhost:5000/AdminLogout',
    //         {
    //           withCredentials: true,
    //         }
    //       )
    //     //   console.log(response.data)
    //       const { success, message } = data;
    //       toast.success("Logged Out Successfully");
    //       setIsAuthenticated(false);
    //     //   if (success) {
    //     //     navigate("/");
    //     //   } else {
    //     //     console.log(message);
    //     //   }
    //     }
    //     catch (error) {

    //         toast.error('Error setting up the request');
    //       setIsAuthenticated(true);

    //     }

    //   };


    return (
        <div>
            <header className="page-header">
                <h1 className='text-xl ml-4 font-semibold'>Admin Dashboard</h1>
                <nav>
                    <Link href="#0" aria-label="forecastr logo" className="logo">
                    </Link>
                    <ul className="admin-menu">
                        <li className="menu-heading">
                            <h3>Admin</h3>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Trends</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Collection</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Comments</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">

                                <span>Appearance</span>
                            </a>
                        </li>
                        <li className="menu-heading">
                            <h3>Settings</h3>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            {/* <li onClick={LogoutHandler}> */}
                            <Link to="/">
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};


