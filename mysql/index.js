var mysql = require('mysql');
var async = require('async');
var config = require('../configs/config');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : config.mysqlPassword,
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var checkSub = function(callback) {
  var boolean = Math.random() * 1 > 0.5;
  if (!boolean) {
    callback(null, boolean);
  } else {
    callback(null, boolean);
  }
};

module.exports.selectAll = selectAll;
module.exports.checkSub = checkSub;
