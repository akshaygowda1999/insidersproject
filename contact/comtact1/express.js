var express = require('express');
var app=express();


app.get('/',function(req,res){
    res.sendFile('/Users/mac/desktop/new/interior/contact.html');
});
app.post('/submit-student-data',function(req,res){
    var name=req.body.firstName+' '+req.body.lastName;
    res.send(name+'submitted successfully!');
});
app.delete('/delete-data',function(req,res){
    res.send('DELETE Request');
});
var server=app.listen(8000,function(){
    console.log('nodeserver is running...');
});