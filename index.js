//port -entry point for server or gateway where external services can enter in server two services 
// no two services can have same port
// headers - share additional info along with the data(sever server communicating) (like codewords)
// HTTP Status code-numerical code used to define a situation i.e request failed  , server crashed,sucess-200
//  Status codes in HTTP 404-not avialable,401-unauthorized,403-forbidden(restricted),server error-500
//JSON-javascript object notation - one of the standard data format to exchange info  between seveers
//look similiar to javascript object

// file system
const fileSystem = require("fs/promises");
// create a file
fileSystem.writeFile("tesla.txt","Hello B2 people !!!!!!")
// to delete it write .unlink 
fileSystem.mkdir("deadpool"); 
// to delete rmdir

// os
const operatingSystem =require("os");
// print out 
console.log(operatingSystem.platform());  
console.log(operatingSystem.arch()); 
// 64bit 

// process
// env variables assign during runtime
console.log(process.env);

// create a server 
const http =require ("http");
const { Interface } = require("readline");
http
.createServer((request, response) => {
console.log(request.headers);
    response.end("Hello client");
})
.listen(); 




// express
//rest API
// RE-representational ->
// S- state->
// T->transfer
// representing a data by sharing after Processing
// api -application programming Interface
// node and express
// express is framework(everything to build an application) for node js 
// library->individual piece of package(it has freedom to choose diff packages)

const express = require("express");
// initialize
const deadpool =express();
deadpool.use(express.json());
// http methods
// get ->to retrive data
deadpool.get("/",(req,res) => {
    return res.json({data:"Hello Guys"});
});
deadpool.get("/b2/:id",(req,res) => {
    const students =[
        {
        id:1,
        name:"vishal"
    },
    {
        id:2,
        name:"vish"
    },
    {
        id:3,
        name:"billu"
    },
];
const studentId=req.params.id;
// filter the array
const getStudent = students.filter((student) =>student.id ===parseInt(studentId)
);
if(getStudent.length === 0){
    return res.json({error:"No student found"});
}
    return res.json({data:getStudent });

});
deadpool.listen(8080,()=>console.log("hey im running"))
// post->to send data to server
// put->update an existing dta
// delete ->delete data

// why schema?
// mongoDB is schemaless
// moongoose helps us with validation and realtionship with other data

// mongoose model
// model-doc model of mongoose

// collection -individual database
// objects inside it are doc



// MongoDB Operators 
// update operators
// $inc-increment
// $min-minimum
// $set-sets new data to an object property,
// $max
// $unset-remove property from an object


// array
// $push,pop,pull-extract name del element
// $addToSet-clever way of pushing data to an array,it checks if data is present or not

