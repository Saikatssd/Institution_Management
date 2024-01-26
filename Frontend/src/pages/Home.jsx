// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home_container">

            <h2>Login Options:</h2>


            <div >

                <div className='login_container'>
                    <h3>Admin Login</h3>
                    <p>
                        <Link to="/admin-login">Admin Login</Link>
                    </p>
                </div>

                <div className='login_container'>
                    <h3>Teacher Login</h3>
                    <p>
                        <Link to="/teacher-login">Teacher Login</Link>
                    </p>
                </div>

                <div className='login_container'>
                    <h3>Student Login</h3>
                    <p>
                        <Link to="/student-login">Student Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
