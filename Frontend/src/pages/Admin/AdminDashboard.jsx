import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './admin.css'
import { toast } from 'react-hot-toast';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import AddStudent from './ManageStudent/AddStudent';
import AdminHome from './AdminHome';
// import { Context } from '../../main.jsx'

export default function AdminDashboard() {
    // const {isAuthenticated, setIsAuthenticated} = useContext(Context);
    // console.log(isAuthenticated);
    // const LogoutHandler = async (e) => {

    //     e.preventDefault();
    //     try {

    //       // const {data}= axios.post(`${server}/AdminLogin`,
    //       const {data} = await axios.get(
    //         'http://localhost:5000/AdminLogout',
    //         {
    //           withCredentials: true,
    //         }
    //       )
    //     //   console.log(response.data)
    //       const { success, message } = data;
    //       toast.success("Logged Out Successfully");
    //       setIsAuthenticated(false);
    //     //   if (success) {
    //     //     navigate("/");
    //     //   } else {
    //     //     console.log(message);
    //     //   }
    //     }
    //     catch (error) {

    //         toast.error('Error setting up the request');
    //       setIsAuthenticated(true);

    //     }

    //   };


    return (
        <div>
            <header className="page-header">
                <h1 className='text-xl ml-4 font-semibold'>Admin Dashboard</h1>
                <nav>
                    <Link href="#0" aria-label="forecastr logo" className="logo">
                    </Link>
                    <ul className="admin-menu">
                        <Routes>
                            {/* <Route path="/" element={<AdminHome />} />
                            <Route path='*' element={<Navigate to="/" />} />
                            <Route path="/admin/dashboard" element={<AdminHome />} /> */}
                            {/* <Route path="/Admin/profile" element={<AdminProfile />} /> */}
                            {/* <Route path="/Admin/complains" element={<SeeComplains />} /> */}

                            {/* Notice */}
                            {/* <Route path="/Admin/addnotice" element={<AddNotice />} />
                        <Route path="/Admin/notices" element={<ShowNotices />} /> */}

                            {/* Subject */}
                            {/* <Route path="/Admin/subjects" element={<ShowSubjects />} />
                        <Route path="/Admin/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
                        <Route path="/Admin/subjects/chooseclass" element={<ChooseClass situation="Subject" />} />

                        <Route path="/Admin/addsubject/:id" element={<SubjectForm />} />
                        <Route path="/Admin/class/subject/:classID/:subjectID" element={<ViewSubject />} /> */}

                            {/* <Route path="/Admin/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} /> */}
                            {/* <Route path="/Admin/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} /> */}

                            {/* Class */}
                            {/* <Route path="/Admin/addclass" element={<AddClass />} /> */}
                            {/* <Route path="/Admin/classes" element={<ShowClasses />} /> */}
                            {/* <Route path="/Admin/classes/class/:id" element={<ClassDetails />} /> */}
                            {/* <Route path="/Admin/class/addstudents/:id" element={<AddStudent situation="Class" />} /> */}

                            {/* Student */}
                            <Route path="addstudents" element={<AddStudent situation="Student" />} />
                            {/* <Route path="/Admin/students" element={<ShowStudents />} /> */}
                            {/* <Route path="/Admin/students/student/:id" element={<ViewStudent />} /> */}
                            {/* <Route path="/Admin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} /> */}
                            {/* <Route path="/Admin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} /> */}

                            {/* Teacher */}
                            {/* <Route path="/Admin/teachers" element={<ShowTeachers />} /> */}
                            {/* <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails />} /> */}
                            {/* <Route path="/Admin/teachers/chooseclass" element={<ChooseClass situation="Teacher" />} /> */}
                            {/* <Route path="/Admin/teachers/choosesubject/:id" element={<ChooseSubject situation="Norm" />} /> */}
                            {/* <Route path="/Admin/teachers/choosesubject/:classID/:teacherID" element={<ChooseSubject situation="Teacher" />} /> */}
                            {/* <Route path="/Admin/teachers/addteacher/:id" element={<AddTeacher />} /> */}

                            {/* <Route path="/logout" element={<Logout />} /> */}
                        </Routes>

                        <li className="menu-heading">
                            <h3>Admin</h3>
                        </li>
                        <li>

                            <Link to='addstudents'>
                                <span>Manage Students</span>
                            </Link>

                        </li>
                        <li>
                            <a href="#0">
                                <span>Manage Teachers</span>
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
                            {/* <li onClick={LogoutHandler}> */}
                            <Link to="/">
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};


