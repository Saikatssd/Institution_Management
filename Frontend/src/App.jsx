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

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<AdminContainer/>}/>
          {/* <Route exact path="/admin" element={<AdminHome />} /> */}

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
