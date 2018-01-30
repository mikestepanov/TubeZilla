var mysql = require('mysql');
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
  var
  for (var i = 0; i < data.length; i++) {

  }
  connection.query(`INSERT INTO archana (channel_id, user_id) VALUES ${values}`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveArchana = saveArchana;
