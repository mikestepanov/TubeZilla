var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'analytics'
});

var init = Date.now();

var genNewData = () => {
  var str = '';
  for (var i = 0; i < 1000; i++) {
    str += `(${~~(Math.random() * 3)}, ${~~(Math.random() * 24)}), `;
  }
  str += `(${~~(Math.random() * 3)}, ${~~(Math.random() * 24)})`;
  return str;
}

for (var i = 0; i <= 15000; i++) {
  if (i === 15000) {
    console.log(`Time took to insert data: ${Date.now() - init} ms`);
  }
  connection.query(`INSERT INTO ez (value, hours) VALUES ${genNewData()}`, function(err, data) {
    if (err) {
      console.log('we are screwed');
    }
  });
}
