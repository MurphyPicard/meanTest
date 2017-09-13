/*
Requirements
Create an express app.
Uses the cities app you made in level 2
A /cities route that will display all cities. (minimum of 5 cities)
The /cities route should accept a limit query that will send back:
a certain number of cities
All cities if 0 is provided or if limit query is omitted
return a status error if the limit is higher than the number of cities available in the list
Add a dynamic route to /cities. This should respond with the state that the city resides in.
Dynamic route should return Not Found status code if the requested city is not available.
Make sure to also normalize the data sent in the /cities route. The city sent should be sendable in any case and still find the state it’s in. ie Providence and providence should both return Rhode Island.
Your normalizing of the data should use a middleware function.
Make sure your /cities route still displays while the other routes can only be accessed by curl currently.
*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('\nHello World');
});

app.get('/name', function(req, res){
  res.send('\nAra Yaghsizian');
});

app.get('/cities', function(req,res){
  res.send(['providence','newport', 'pawtucket', 'warwick']);
  // res.redirect(301, '/surprise');
});

app.listen(9999, function(){
  console.log("9999....");
});
