var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: Number,
    address: String,
    bio: String,
    hobbies: String,
  },
  { timestamps: true }
);

var User = mongoose.model('User', UsersSchema);

module.exports = User;
