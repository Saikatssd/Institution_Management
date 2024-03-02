const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectId: { type: String, required: true, unique: true },
  subjectName: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  year: { type: String, required: true },
  semester: { type: String, required: true },
});

const subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
