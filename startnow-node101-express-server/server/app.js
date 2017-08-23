// import files and packages up here
var data = (require('./data.json'));
var express = require('express');
var morgan = require('morgan');

// create your express server below
var app = express();

// Middleware
app.use(morgan('dev'));

// Routes
app.get('/', function(req, res){
  res.send("words of wisdom");
});
app.get('/data', function(req, res){
  res.json(data);
});

// finally export the express application
module.exports = app;
