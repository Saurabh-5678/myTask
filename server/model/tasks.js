const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  assignedTo: {
    type: String,
    required: true,
    trim: true,  // Trims whitespace
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  comment: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('TaskNew', TaskSchema);
