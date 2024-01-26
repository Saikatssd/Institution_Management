import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/admin" element={<Admin />} /> */}

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
