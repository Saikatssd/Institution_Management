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
    const newTeacher = new Teacher(req.body);
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
      const newCourse = new Course(req.body);
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
module.exports = router
