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
Your normalizing of the data should use a middleware function.
Make sure your /cities route still displays while the other routes can only be accessed by curl currently.
*/

const express = require('express');
const app = express();
var cities = {
  'Providence': 'RI',
  'Boston': 'MA',
  'Cleveland': 'OH',
  'Warwick': 'RI',
  'Johnston': 'RI'
};

app.get('/', function(req, res){
  res.send('\nHello World');
});

app.get('/name', function(req, res){
  res.send('\nAra Yaghsizian');
});

app.get('/cities', function(req, res){
  var cities = [
    'Providence',
    'Boston',
    'Cleveland',
    'Warwick',
    'Johnston'
  ];

  if(req.query.limit > 5){
    res.status(400).json("Choose 1 - 5!")
  }
  else{
    req.query.limit >= 1 ? res.json(cities.slice(0, req.query.limit)) : res.json(cities);
  }
  res.send(cities);
  // res.redirect(301, '/surprise');
});

app.get('/cities/:name', function(req,res){
  // we can use boston or Boston as params
  var state = cities[req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1).toLowerCase()];
  !state ? res.status(404).json("Not Found: "+ req.params.name) : res.json(state);
});

app.listen(9999, function(){
  console.log("9999....");
});
