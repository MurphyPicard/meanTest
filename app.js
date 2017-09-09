// CodeSchool Express Level 2
// Create a simple express node app meeting the following requirements
// Requirements
// Create an express app.
// Create index.html in a folder called public.
// Index.html
// Include an H1 header
// Include a form with an empty selection element
// Create JS file that will make an ajax request to /cities and display each city inside the selection element.
// Create a /cities route in your app.js file with at least 4 cities.

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
