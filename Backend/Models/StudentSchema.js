const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true, unique: true },
  year: { type: String, required: true },
  rollNo: { type: String, required: true },
  semester: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  courses: {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    courseName: { type: String, required: true },
  },
  
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;