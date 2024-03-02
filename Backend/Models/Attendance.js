const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
 
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
 
  year: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Year',
    required: true,
  },
  // Reference to the Course model
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
 
  date: {
    type: Date,
    default: Date.now,
  },
 
  attendanceRecords: [
    {
      studentName: {
        type: String,
        required: true,
      },
      rollNo: {
        type: String,
        required: true,
      },
      
      isPresent: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
