import React from 'react'
import Sidebar from './AdminSidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import AddStudent from './ManageStudent/AddStudent';
import Logout from '../Logout';

export default function AdminHome() {
  const options = ['Home', 'Notes', 'addStudent', 'Result', 'Subjects','Logout'];

  return (
    <div className="Admin-home flex flex-col md:flex-row">
    <Sidebar options={options} />
    <div className="content flex-1 p-4">
    <Routes>
        <Route path="home" element={<h1>Welcome to Home Page!</h1>} />
          <Route path="addStudent" element={<AddStudent/>} />
          <Route path="logout" element={<Logout/>} />
        </Routes>
    </div>
  </div>
  )
}
