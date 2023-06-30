const mongoose = require('mongoose');

// Users
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Users = mongoose.model('Users', usersSchema)

module.exports = Users