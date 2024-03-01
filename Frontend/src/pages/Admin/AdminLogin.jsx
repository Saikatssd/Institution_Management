// import React, { useState} from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from "react-hot-toast";
// import { Context } from '../../main.jsx'
// import { login, clearErrors } from '../../Actions/userAction'

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//   const navigate = useNavigate();
// const dispatch = useDispatch();
// const { isAuthenticated, loading } = useSelector((state) => state.auth);
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/AdminLogin',
//         { email, password }
//       );

//       console.log(response);
//       toast.success(response.data.message);

//       setIsAuthenticated(prevState => !prevState);

//       // Use navigate outside the try block
//       navigate('/admin');
//     } catch (error) {
//       toast.error("Error");
//       setIsAuthenticated(false);
//     }
//   };

//   if (isAuthenticated) {
//     navigate('/admin');
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
//         <form>
//           {/* <Navigate to={"/admin"}/> */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleLogin}
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Loader from '../Layout/Loader.jsx'
// // import { useAlert } from 'react-alert'
// import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from 'react-redux'
// import { login, clearErrors } from '../../Actions/userAction'

// export default function AdminLogin() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // const alert = useAlert();
//     const dispatch = useDispatch();
//     const { isAuthenticated, loading } = useSelector((state) => state.auth);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(login(email, password)).then(() => {
//             if (isAuthenticated) {
//                 window.location.href = "/admin";
//             }
//             else {
//                 toast.error("Login failed ");
//                 dispatch(clearErrors());
//             }
//         }).catch((error) => {
//             toast.error("Login Error");
//             dispatch(clearErrors());
//         });
//     }

//     return (
//         <div>
//             {
//                 loading ?
//                     (<Loader />
//                     ) : (
//                         <>
//                             <div className="row wrapper">
//                                 <div className="grid grid-col-10">
//                                     <form action="" onSubmit={submitHandler} className="shadow-lg space-y-6">
//                                         <h1 className='mb-3 text-3xl'>Login</h1>
//                                         <div className="form-group">
//                                             <label htmlFor="email_field">Email</label>
//                                             <input type="text" className='form-control border border-gray-400' value={email} onChange={(e) => setEmail(e.target.value)}
//                                                 required />
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="password_field">Password</label>
//                                             <input type="text" className='form-control border border-gray-400' value={password} onChange={(e) => setPassword(e.target.value)}
//                                                 required />
//                                         </div>
//                                         <Link className='float-right mb-4' to="/users/forgotPassword">Forgot Password
//                                         </Link>
//                                         <br />
//                                         <button type="submit" className='btn flex py-3'>LOGIN</button>
//                                         <Link to="/users/signup" className="float-right mt-3">
//                                             NEW USER?
//                                         </Link>
//                                     </form>
//                                 </div>
//                             </div>
//                         </>
//                     )
//             }
//         </div>
//     )
// }





import axios from 'axios';
import React, { useState } from 'react';
import Loader from "../Layout/Loader";

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-hot-toast";
import { login, clearErrors } from '../../Actions/userAction'

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
    console.log("Authenticated:" + isAuthenticated);
    console.log("Error:" + error);

    const handleLogin = async (e) => {
        e.preventDefault();
        // dispatch(login(email, password)).then(() => {
        try {
            await dispatch(login(email, password));
            console.log("After Dispatch:");

            console.log("Authen after:" + isAuthenticated)
            console.log("Error after:" + error);

            if (isAuthenticated) {
                window.location.href = "/admin";
            }
            else {
                toast.error(error);
                dispatch(clearErrors());
            }
        }
        catch (error) {
            toast.error(error);
            dispatch(clearErrors());
        };
    };
    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const { data } = await axios.post(
    //             "http://localhost:5000/AdminLogin",
    //             // `${server}/users/login`,
    //             {
    //                 email,
    //                 password,
    //             },
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 withCredentials: true,
    //             }
    //         );
    //         console.log(data);

    //         window.location.href = "/admin";
    //         toast.success(data.message);
    //     } catch (error) {
    //         toast.error(error.response.data.message);
    //         //   toast.error("Error");
    //     }
    // };
    return (
        <>
            {loading ? (
                <Loader />
            ) : (

                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded shadow-md w-96">
                        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
                        <form>
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
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminLogin;
