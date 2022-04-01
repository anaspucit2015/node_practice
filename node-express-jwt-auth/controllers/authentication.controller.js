const User = require('../models/User.modal');

const handleError = (err) =>{
  const error = {email:'', password:''};
  if (err.message.includes('user validation failed'))
  {
    console.log(Object.values(err.errors))
  }
}

module.exports.signup_get = (req,res)=>{
res.render('signup');
}
module.exports.signup_post = async (req,res)=>{
const {email,password} = req.body;
try{
  const user = await User.create({email,password})
  res.status(201).json(user)
}
catch(error){
  handleError(error)
  res.status(400).send("Error, User not created")
}

}
module.exports.login_get = (req,res)=>{
res.render('login');
}
module.exports.login_post = (req,res)=>{
const {email,password} = req.body
res.send('New Login');
}