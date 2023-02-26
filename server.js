const express = require("express");
const app=new express();
app.use(express.static('frontend'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
});
app.get('/myname',(req,res)=>{
    res.send("This is sumanth");
});
app.listen(3000,function(){
    console.log("Server running on http://localhost:3000/");
});



