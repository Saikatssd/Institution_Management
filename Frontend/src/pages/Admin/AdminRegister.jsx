import axios from 'axios';
import React, { useState } from 'react';
import Loader from "../Layout/Loader";

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-hot-toast";

const AdminRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
    console.log("Authenticated:" + isAuthenticated);
    console.log("Error:" + error);

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     // dispatch(login(email, password)).then(() => {
    //     try {
    //         await dispatch(login(email, password));
    //         console.log("After Dispatch:");

    //         console.log("Authen after:" + isAuthenticated)
    //         console.log("Error after:" + error);

    //         if (isAuthenticated) {
    //             window.location.href = "/admin";
    //         }
    //         else {
    //             toast.error(error);
    //            await dispatch(clearErrors());
    //         }
    //     }
    //     catch (error) {
    //         toast.error(error);
    //         await dispatch(clearErrors());
    //     };
    // };

    //Normal handler
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                "http://localhost:5000/AdminReg",
                // `${server}/users/login`,
                {
                    name,
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            console.log(data);

            window.location.href = "/admin";
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            //   toast.error("Error");
        }
    };
    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : ( */}

                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded shadow-md w-96">
                        <h2 className="text-2xl font-bold mb-6">Admin Register</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                            >
                                SignUp
                            </button>

                            <h4 className='text-center'>Or</h4>
                            <Link to="/AdminLogin" className='text-blue-600 hover:underline flex justify-center'>Log In</Link>
                        </form>
                    </div>
                </div>
            {/* )} */}
        </>
    );
};

export default AdminRegister;
