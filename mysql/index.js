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

var saveArchana = function(data, callback) {
  var values = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].subs.length; j++) {
      var value = `${data[i].id}, ${data[i].subs[j]}`;
      values.push(value);
    }
  }
  console.log(values);
  connection.query(`INSERT INTO archana (channel_id, user_id) VALUES ${values.join(', ')}`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveArchana = saveArchana;
