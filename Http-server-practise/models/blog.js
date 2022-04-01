const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
      type: String,
      required: true,
    },
    snippet:{
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true
    }
},{timestamps:true})
// ==================================
// Hum Hmaisha Table ka name singular or Capital mei Likhty hain Model Mei
const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog