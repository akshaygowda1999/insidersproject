var express = require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.get('/',function(req,res){
    res.sendFile('/Users/mac/desktop/new/index.html',{root: __dirname});
});
app.post('/submit-student-data',function(req,res){
    var name=req.body.firstName+' '+req.body.lastName;
    res.send(name+'submitted successfully!');
});
app.delete('/delete-data',function(req,res){
    res.send('DELETE Request');
});
var server=app.listen(5000,function(){
    console.log('nodeserver is running');
});