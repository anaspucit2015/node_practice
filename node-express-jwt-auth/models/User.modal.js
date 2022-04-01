const mongoose = require('mongoose');
const { isEmail } = require('validator');
const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: [true,'Please enter an Email'],
    unique: true,
    lowercase: true,
    validate:[isEmail,'Please enter an valid email'],
  },
  password:{
   type: String,
   minlength: [8,'Password should be 8 or more charactor long'],
   required:[true,'Please enter an Password'],
  }
})

const User = mongoose.model('user',userSchema)

module.exports = User;