const mysql = require('mysql');
const request = require('request');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'analytics'
});

const save = function(obj, callback) {
  const item = `(${obj.user_id}, ${obj.channel_id}, ${obj.ad_clicked}, ${obj.ad_status})`;
  connection.query(`INSERT INTO metrics (user_id, channel_id, ad_clicked, ad_status) VALUES ${item}`, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results.insertId);
    }
  });
};

const checkSub = function(callback) {
  const boolean = Math.random() * 1 > 0.5;
  if (!boolean) {
    callback(null, boolean);
  } else {
    callback(null, boolean);
  }
};

const GilOutput = function(obj, callback) {
  console.log(Date.now());
  const {user_id, channel_id, ad_status} = obj;
  request({
    method: 'POST',
    url: 'http://127.0.0.1:3000/subscribed/',
    json: true,
    body: {
      user_id: user_id,
      channel_id: channel_id
    }
  }, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      var subscribed = res.body;
      var hours = new Date().getHours();
      connection.query(`INSERT INTO final (value, subscribed, hours) VALUES (${ad_status}, ${subscribed}, ${hours})`, function(err, results) {
        if(err) {
          callback(err, null);
        } else {
          callback(null, results.insertId);
        }
      });
    }
  });
};

module.exports = {
  save,
  checkSub,
  GilOutput
};
