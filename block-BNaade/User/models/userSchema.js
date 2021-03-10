var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);

var User = mongoose.model('User', UsersSchema);

module.exports = User;
