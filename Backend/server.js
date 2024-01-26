const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Teacher = require('./Models/Teacher');
const Course = require('./Models/Course');
const Department = require('./Models/Department');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


// For teachers//

router.post('/teachers', async (req, res) => {
    try {
        const { courses: courseNames, departmentName, ...teacherData } = req.body;
  
        const department = await Department.findOne({ departmentName });
    
        if (!department) {
          return res.status(404).json({ error: 'Department not found' });
        }
    
        const courses = [];
        for (const courseName of courseNames) {
          const course = await Course.findOne({ courseName });
          if (!course) {
            return res.status(404).json({ error: `Course not found: ${courseName}` });
          }
          courses.push({ courseId: course._id, courseName });
        }
    
        const newTeacher = new Teacher({
          ...teacherData,
          courses,
          department: department._id,
        });
    
        const savedTeacher = await newTeacher.save();
        res.json(savedTeacher);
      } catch (error) {
        console.error('Error creating teacher:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  });

router.get('/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//For courses
router.post('/courses', async (req, res) => {
    try {
      const { departmentName, ...courseData } = req.body;
  
      const department = await Department.findOne({ departmentName });
  
      if (!department) {
        return res.status(404).json({ error: 'Department not found' });
      }
 
      const newCourse = new Course({
        ...courseData,
        department: department._id,
      });
  
      const savedCourse = await newCourse.save();
      res.json(savedCourse);
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  router.get('/courses', async (req, res) => {
    try {
      const courses = await Course.find().populate('department', 'departmentName');
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//For Department
router.post('/departments', async (req, res) => {
    try {
      const newDepartment = new Department(req.body);
      const savedDepartment = await newDepartment.save();
      res.json(savedDepartment);
    } catch (error) {
      console.error('Error creating department:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/departments', async (req, res) => {
    try {
      const departments = await Department.find();
      res.json(departments);
    } catch (error) {
      console.error('Error fetching departments:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  //Department,year,sem wise all courses available
  router.get('/courses/byDepartment/:departmentName/:year/:semester', async (req, res) => {
    try {
      const departmentName = req.params.departmentName;
      const year = req.params.year;
      const semester = req.params.semester;
      console.table([departmentName,year,semester])
      const department = await Department.findOne({ departmentName });
  
      if (!department) {
        return res.status(404).json({ error: 'Department not found' });
      }
  
      const courses = await Course.find({ department: department._id,year,semester });
  
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses by department:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router
