const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'j0infk1wdruxowkq',
  port:"3306",
  password: 'xkasgvnq85t96knq',
  database: 'e9ijtk28jgdrt7ri',
});

exports.handler = (event, context, callback) => {
  // allows for using callbacks as finish/error-handlers
  context.callbackWaitsForEmptyEventLoop = false;
  let body = event.body;
  let buff = new Buffer(body, 'base64');
  let id = buff.toString('ascii');
  const sql = "select * from classrooms where Id_faculty = " + id;
  connection.query(sql, (err, res) => {
    if (err) {
      throw err
    }
    callback(null, res);
  });
    
};