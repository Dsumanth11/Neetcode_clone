const mongoose=require('mongoose');
// creating schema 
const courseSchema=new mongoose.Schema(
    {
        "title":{type:String,unique:true,required:true},
        "level":{type:String},
        "createdAt":{type:Date,default:Date.now}
    }
);

//creating model for a schema
module.exports=mongoose.model("course",courseSchema);