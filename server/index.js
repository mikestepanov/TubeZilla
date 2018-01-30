var express = require('express');
var request = require('request');
var db = require('../mysql');

var Archana = require('../Archana.js')();

var app = express();

app.use(express.static(__dirname + '/../react/dist'));

app.get('/', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/subscribed', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/save', function (req, res) {
  db.save(el, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Serving 127.0.0.1:${port}`);
});

app.get('/archana', function (req, res) {
  console.log('arch');
  db.saveArchana(Archana, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

request(`localhost:${port}/archana`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
