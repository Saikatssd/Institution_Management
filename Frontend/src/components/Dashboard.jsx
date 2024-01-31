import React from 'react';
import './dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <header className="page-header">
        <h1 className='text-xl ml-4 font-semibold'>Admin Dashboard</h1>
        <nav>
          <a href="#0" aria-label="forecastr logo" className="logo">
          </a>
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
              <a href="#0">
                <span>Options</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <span>Charts</span>
              </a>
            </li>
            <li>

            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Dashboard;
