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
  // TODO: Change this to optional at a later date maybe
  email: {
    type: String,
    required: true
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
module.exports = User = mongoose.model('users', UserSchema);