const dotenv=require('dotenv');
dotenv.config();

const mongoose=require("mongoose");
const port=process.env.PORT || 3010;

const express = require("express");
const app=new express();
app.use(express.static('frontend'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
});
app.get('/myname',(req,res)=>{
    res.send("This is sumanth");
});
app.listen(port,function(){
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGO_CONNECTION_STRING,function(err){
        if(err)
        {
            console.error(err);
        }
        else{
            console.log("DB Connection Succesfully");
        }
    });
    console.log("Server running on http://localhost:3000/");
});


