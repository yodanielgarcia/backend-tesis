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
  const sql = "select * from users where type_user= 2";
  connection.query(sql, (err, res) => {
    if (err) {
      throw err
    }
    callback(null, res);
  });
    
};