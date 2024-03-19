const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Teacher = require('../models/Teacher');
const subject = require('../models/subject');
const Department = require('../models/Department');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


// For teachers//

const  teacherRegister = async (req, res) => {
    try {
        const { subjects: subjectNames, departmentName,email, ...teacherData } = req.body;
        const existingAdminByEmail = await Admin.findOne({ email });
        
                if (existingAdminByEmail) {
                   res.send({ message: 'Email already exists' });
                 }
        const department = await Department.findOne({ departmentName });

        if (!department) {
          return res.status(404).json({ error: 'Department not found' });
        }
    
        const subjects = [];
        for (const subjectName of subjectNames) {
          const subject = await subject.findOne({ subjectName });
          if (!subject) {
            return res.status(404).json({ error: `subject not found: ${subjectName}` });
          }
          subjects.push({ subjectId: subject._id, subjectName });
        }
    
        const newTeacher = new Teacher({
          ...teacherData,
          subjects,
          department: department._id,
        });
    
        const savedTeacher = await newTeacher.save();
        res.json(savedTeacher);
      } catch (error) {
        console.error('Error creating teacher:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };

 const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//For subject
const addSubject = async (req, res) => {
    try {
      const { departmentName, ...subjectData } = req.body;
  
      const department = await Department.findOne({ departmentName });
  
      if (!department) {
        return res.status(404).json({ error: 'Department not found' });
      }
 
      const newSubject = new Subject({
        ...subjectData,
        department: department._id,
      });
  
      const savedSubject = await newSubject.save();
      res.json(savedSubject);
    } catch (error) {
      console.error('Error creating subject:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  const getSubject = async (req, res) => {
    try {
      const subject = await subject.find().populate('department', 'departmentName');
      res.json(subject);
    } catch (error) {
      console.error('Error fetching subject:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


//For Department
const addDept = async (req, res) => {
    try {
      const newDepartment = new Department(req.body);
      const savedDepartment = await newDepartment.save();
      res.json(savedDepartment);
    } catch (error) {
      console.error('Error creating department:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getDept = async (req, res) => {
    try {
      const departments = await Department.find();
      res.json(departments);
    } catch (error) {
      console.error('Error fetching departments:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  //Department,year,sem wise all subjects available
 const getSubjectDeptYearwise=async (req, res) => {
    try {
      const departmentName = req.params.departmentName;
      const year = req.params.year;
      const semester = req.params.semester;
      console.table([departmentName,year,semester])
      const department = await Department.findOne({ departmentName });
  
      if (!department) {
        return res.status(404).json({ error: 'Department not found' });
      }
  
      const subjects = await subject.find({ department: department._id,year,semester });
  
      res.json(subjects);
    } catch (error) {
      console.error('Error fetching subjects by department:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports = {teacherRegister,getTeachers,addSubject,getSubject,addDept,addDept,getDept,getSubjectDeptYearwise}
