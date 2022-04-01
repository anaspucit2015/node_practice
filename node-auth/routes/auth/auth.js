const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const joi = require('@hapi/joi'); 

// For Validation Requirement
const registerSchema = joi.object({
  fName: joi.string().min(5).required(),
  lName: joi.string().min(5).required(),
  email: joi.string().min(6).required().email(),
  password: joi.string().min(8).required()
})

// Registereing User
router.post('/register',async(req,res)=>{
  // Email Verifying 
  const emailExist = await User.findOne({email : req.body.email}) 
  if(emailExist)
  {
    res.status(400).send("Email is already Exist!")
  }
  
  // Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password,salt);

  // User For DB
  const user = new User({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    fName: hashedPassword,
  });

  // VAlidating User Inputs
  try{
    const {error} = await registerSchema.validateAsync(req.body)
    if(error)
    {
      res.status(400).send(error.details[0].message)
      return;
    }
    else{
      const saveUser = await user.save()
      res.status(200).send("User Created !");
    }
  }
  catch (error){
    res.status(500).send(error)
  }
});

module.exports = router;