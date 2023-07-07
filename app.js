const express=require("express");

const app=express();
app.use("/public", express.static(__dirname+"/public"));
app.use("/script.js", express.static(__dirname+"/script.js"));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/login.html", function(req, res){
    res.sendFile(__dirname+"/login.html");
});
app.get("/signUp.html", function(req, res){
    res.sendFile(__dirname+"/signUp.html");
});
app.get("/applications.html", function(req, res){
    res.sendFile(__dirname+"/applications.html");
});
app.listen(8000, function(){
    console.log("Server running at port 8000");
});