
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Sidebar from './TeacherSidebar';
import Home from './TeacherNotes';
import Notes from './TeacherNotes';
import Attendance from './AttendancePage';
import Result from './ResultPage';
import Subjects from './TeacherNotes';

const TeacherHome = () => {
  const options = ['Home', 'Notes', 'Attendance', 'Result', 'Subjects'];

  return (
    <div className="teacher-home flex flex-col md:flex-row">
      <Sidebar options={options} />
      <div className="content flex-1 p-4">
        <Routes>
        <Route path="home" element={<h1>Welcome to Home Page!</h1>} />
          <Route path="notes" element={<Notes />} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="result" element={<Result/>} />
          <Route path="subjects" element={<h1>Welcome to Home Page!</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default TeacherHome;