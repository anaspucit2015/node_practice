const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName:{
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  lName:{
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  email:{
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password:{
    type: String,
    required: true,
    min: 8,
    max : 30,
  },
  date:{
   type: Date,
   default: Date.now(),
  }
},{timestamps:true})

const User = mongoose.model('User',userSchema);
module.exports = User;
