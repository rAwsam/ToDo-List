// jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();

// Setting up ejs
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));

var pointData=["Wake Up!","Learn","Repeat"];

app.post("/add",function(req,res) {
    var Data=req.body.point;
    pointData.push(Data);
    res.redirect("/");
});

app.get("/",function(req,res) {
    var options={
        month:"long",
        day:"2-digit",
        weekday:"long"
    };
    var today=new Date();
    var day=today.toLocaleDateString("en-us",options);

    res.render("ToDo",{ //an object which tells us the the values to be substituted
        kindOfDay:day,
        newPoint:pointData
    });
});

app.listen(5000,function() {
    console.log("Server is online at port 5000");
});
