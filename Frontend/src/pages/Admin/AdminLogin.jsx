// AdminLogin.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();
    try {

      const response = await axios.post(
        'http://localhost:5000/AdminLogin', {email,password},
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // }
      )
      console.log(response.data)
      const { success, message } = response.data;
      toast.success("Success message");
      if (success) {
        navigate("/admin");
      } else {
        console.log(message);
      }


    }
    catch (error) {
      // toast.error(error.response.data.message);
      toast.error("error message");
      console.log("error")
    }
    console.log('Admin login clicked with email:', email, 'and password:', password);


  };

  return (
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
  );
};

export default AdminLogin;
