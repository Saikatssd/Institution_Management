const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  year: { type: Number, required: true },
  semester: { type: String, required: true },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
