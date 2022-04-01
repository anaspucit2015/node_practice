const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const { Router } = require('express');
const blogRoutes = require('./routes/blogRoutes');
// const { result } = require('lodash');

const app = express();

// Connect to mongodb 
const dbURI = 'mongodb+srv://newhun:1234@testcluster.ltde4.mongodb.net/node-practice?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>app.listen(3000))
.catch((err)=>console.log(err))

// Tyring to Store some data in data base

app.get('/add-blog',(req,res)=>{
  const blog = new Blog({
    title:"New Blog 2",
    snippet:"About the blog",
    body: 'More About the Body of the Blog'
  })
  blog.save()
  .then(result=>res.send(result))
  .catch(err=>console.log(err))
})

app.get('/all-blogs',(req,res)=>{
  Blog.find()
  .then(result=>res.send(result))
  .catch(err=>console.log(err))
})

app.get('/single-blog',(req,res)=>{
  Blog.findById('618bbef21565df8e53d060ce')
  .then(result=>res.send(result))
  .catch(err=> console.log(err))
})

// Registering Views with EJS
app.set('view engine','ejs')
//Applying Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

// app.use((req,res,next)=>{
//   console.log("We Got a Request");
//   console.log("Request Url : ", req.url);
//   console.log("Request Query : ",req.query);
//   console.log("Hostname : ",req.hostname);
//   console.log("Method : ",req.method);
//   next();
// })


// Getting Requests
app.get('/',(req,res)=>{
  // res.send('<h2>Home Page</h2>')
  // res.sendFile('./views/first.html',{root:__dirname})
  //  const blogs = [
  //   {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //   {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //   {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  // ];
  // res.render('index',{title:'Home',blogs}) 
  // +++++++++++We Are redirecting to the blogs url and calling all the blogs+++++++
  res.redirect('/blogs')
})
app.get('/about',(req,res)=>{
  // res.sendFile('./views/about.html',{root:__dirname})
  res.render('about',{title:'About'})
})

//Blog Routes
app.use('/blogs',blogRoutes)

app.use((req,res)=>{
// res.status(404).sendFile('./views/404.html',{root:__dirname})
res.status(404).render('404',{title:'OOPS | 404'})
})

