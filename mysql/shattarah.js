var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'analytics'
});
  
var init = Date.now();
var data = [];
var str = '';
var count = 0;
for (var i = 0; i <= 10000; i++) {
  for (var j = 0; j < 1000; j++) {
    str += `(${i}, ${j}), `;
  }
  str += `(${i}, ${j})`;
  data.push(str);
  str = '';
}
console.log(`Time took to generate data: ${Date.now() - init} ms`);

var init = Date.now();
var count = 0;
for (var str of data) {
  connection.query(`INSERT INTO ez (user_id, channel_id) VALUES ${str}`, function() {
    count++;
    if (count === 10000) {
      console.log(`Time took to insert data: ${Date.now() - init} ms`);
    }
  });
}
