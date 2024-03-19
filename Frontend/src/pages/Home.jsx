// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="container mx-auto mt-20 text-center p-8 bg-white rounded shadow-md">
            <h1 className="text-4xl font-extrabold mb-6">Institution Management System</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-200 hover:bg-blue-300 p-6 rounded-lg transition">
                    <Link to="/adminLogin" className="text-blue-800 font-bold">Admin Login</Link>
              </div>
                <div className="bg-green-200 hover:bg-green-300 p-6 rounded-lg transition">
                    <Link to="/teacher" className="text-green-800 font-bold">Teacher Login</Link>
                </div>
                <div className="bg-yellow-200 hover:bg-yellow-300 p-6 rounded-lg transition">
                    <Link to="/studentLogin" className="text-yellow-800 font-bold">Student Login</Link>
                </div>
            </div>
        </div>

    );
};

export default Home;
