/*
Requirements
Using the level 2/3 app
Add in the ability to add a new city.
City name
Containing city
Should confirm the city and state has values
State should have at least two characters.
City should have at least four characters
Page should update to hide the city
Update page to make the cities links which return the state name
Add ability to remove a city
City should be confirmed prior to removing it
Response should contain the correct status code
Page should update with new info
Additional challenge
Add additional information to the site:
Add the additional data points longitude and latitude
Clickable link should display google maps centered to the longitude and latitude in new tab
Form should confirm that lat lon are numbers.
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
