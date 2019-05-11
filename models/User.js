// Importing mongoose to use
const mongoose = require('mongoose');
// Import the Mongoose Schema
const Schema = mongoose.Schema;

// Define schema
const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // TODO: Or just not have this at all
    required: false
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export module
module.exxports = User = mongoose.model('users', UserSchema);