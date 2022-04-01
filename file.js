const fs = require('fs');
// fs.readFile('./doc/hey.doc',(err,data)=>{
//   if(err){
//   console.log("There is an Error",err)
//   }
//   console.log("ReadFile is Successful : ",data.toString());
// })

// Write File 
// fs.writeFile('./doc/hey2.doc',"Hey there I am in the new file",()=>{
//   console.log("File Was Written");
// })


// Directories
// if(!fs.existsSync('./Assets')){
// fs.mkdir('./Assets',(err)=>{
//   if(err){
//     console.log("There is an Error in making this directory.")
//   }
//   console.log("Directory Created")
// })
// }
// else{
// fs.rmdir('./Assets',(err)=>{
//   if(err){
//     console.log("There is an Error in Removing this directory.")
//   }
//   console.log("Directory Removed")
// })
// }

// Streaming

const readStream = fs.createReadStream('./doc/hey2.doc',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./doc/hey.doc')
// readStream.on('data',(chunk)=>{
// console.log(chunk);
// writeStream.write("+++++++++++++++++++++++++++++++++");
// writeStream.write("+++++++++++NEW CHUNK+++++++++++++");
// writeStream.write("+++++++++++++++++++++++++++++++++");
// writeStream.write(chunk);
// })
readStream.pipe(writeStream);