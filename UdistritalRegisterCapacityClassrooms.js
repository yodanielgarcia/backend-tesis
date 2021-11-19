const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'j0infk1wdruxowkq',
  port:"3306",
  password: 'xkasgvnq85t96knq',
  database: 'e9ijtk28jgdrt7ri',
});

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let body = event.body;
  let buff = new Buffer(body, 'base64');
  let text = buff.toString('ascii');
  text = JSON.parse(text)
  connection.query("INSERT INTO capacityclassrooms SET ?", text, (err, data) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    callback(null, 'ok');
  });
};