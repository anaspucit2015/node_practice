const express = require('express');
const app = express()
const PORT = process.env.PORT || 4050
app.get('/',(req,res)=>{
res.send('Hey its working !!')
})

app.listen(PORT,()=> console.log(`Sever up and running on ${PORT}`))

// Accessing Data base Through Env !
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const authRoute = require('./routes/auth/auth');

//  Configuring Env
dotenv.config();

mongoose.connect(
process.env.DB_CONNECT,
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log("Db Connected")
)

app.use(express.json(),cors())
app.use('/api/users',authRoute)
