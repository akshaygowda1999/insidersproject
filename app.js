//major-project-WD 
//use mongodb database to see the data stored via nodejs 
// mongoose.connect('mongodb://localhost:27017/interior12'  //line no:19
//in the above code u have to connect it with a db (In the above url, interior12 is the database)
//MongoDB, by default, runs on port 27017


var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
   mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost:27017/interior12",{ useMongoClient: true });

   var nameSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    description: String
   });
   
   
   var User = mongoose.model("User", nameSchema);
   app.get("/", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
   });
   app.post("/submit-student-data", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("thanks for your feedback!!!");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});
app.listen(port, () => {
 console.log("Server listening on port " + port);
});























