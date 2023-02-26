const dotenv=require('dotenv');
dotenv.config();

const mongoose=require("mongoose");
const port=process.env.PORT || 3000;

const courseLib=require("./backend/lib/courseLib.js");
const express = require("express");
const app=new express();
app.use(express.static('frontend'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
});
app.get('/myname',(req,res)=>{
    res.send("This is sumanth");
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,async function(err){
    if(err)
    {
        console.error(err);
    }
    else{
        console.log("DB Connection Succesfully");     
        await courseLib.CreateFirstCourse();  
        const ans=await courseLib.getAllCourses();
        console.log(ans); 
        app.listen(port,function(){
            console.log(`Server running on http://localhost:${port}/`);
        });
    }
});


