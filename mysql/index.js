var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'analytics'
});

var save = function(obj, callback) {
  var item = `(${obj.user_id}, ${obj.channel_id}, ${obj.ad_clicked}, ${obj.ad_status})`;
  connection.query(`INSERT INTO metrics (user_id, channel_id, ad_clicked, ad_status) VALUES ${item}`, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results.insertId);
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

module.exports = {
  save,
  checkSub
};
