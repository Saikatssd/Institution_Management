import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import AdminContainer from './container/AdminContainer';
import Dashboard from './components/Dashboard';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminLogin from './pages/Admin/AdminLogin';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminDashboard/>}/>
          <Route exact path="/adminLogin" element={<AdminLogin/>}/>
          <Route exact path="/teacher" element={<TeacherDashboard />} />
          <Route exact path="/student" element={<StudentDashboard />} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
