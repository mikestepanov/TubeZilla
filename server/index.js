var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var db = require('../mysql');

var app = express();

app.use(express.static(__dirname + '/../react/dist'));
app.use(bodyParser.json());

app.get('/ads', function (req, res) {
  db.save(req.body, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/subscribed', function (req, res) {
  db.checkSub(function(err, data) {
    if (err) {
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
