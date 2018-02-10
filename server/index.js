const nr = require('newrelic');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const db = require('../mysql');

const app = express();

app.use(express.static(__dirname + '/../react/dist'));
app.use(bodyParser.json());

app.get('/ads', function (req, res) {
  db.GilOutput({user_id: `${~~(Math.random() * 10)}`, channel_id: `${~~(Math.random() * 10)}`, ad_status: `${~~(Math.random() * 3)}`}, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/subscribed', function (req, res) {
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
  console.log(`127.0.0.1:${port}`);
});
