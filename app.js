// CodeSchool Express Level 1
// Create a simple express node app meeting the following requirements
// Requirements
// Create an express app.
// Create a root route that returns “Hello World”
// Create a ‘/name’ route that returns your name
// Create a /redirect route that sends you to /suprise with a moved permanently status code

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('\nHello World');
});

app.get('/name', function(req, res){
  res.send('\nAra Yaghsizian');
});

app.get('/redirect', function(req,res){
  // return res.redirect(301, 'https://serviceworke.rs/' + req.originalUrl);
  res.redirect(301, '/surprise');
});

app.listen(9999, function(){
  console.log("9999....");
});
