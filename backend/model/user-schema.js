const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
    maxlength: [20, 'name must not contain more than 20 character'],
    minlength: [3, 'name must not less than 3 character'],
  },
  active: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('UserManagement', userSchema);
