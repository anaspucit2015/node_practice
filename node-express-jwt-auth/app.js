const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authentication.routes');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json()); //Use to access body and other values of the request

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://newhun:1234@testcluster.ltde4.mongodb.net/authentication?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => { console.log("db Connected"); app.listen(3000)})
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);