const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true, unique: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  role: {
    type: String,
    default: "teacher"
},
  subject: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    subjectName: { type: String, required: true },
  }],
  
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
