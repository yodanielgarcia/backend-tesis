const mysql = require('mysql');
const AWS = require("aws-sdk");
const connection = mysql.createConnection({
  host: 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'j0infk1wdruxowkq',
  port:"3306",
  password: 'xkasgvnq85t96knq',
  database: 'e9ijtk28jgdrt7ri',
});

exports.handler = (event, context, callback) =>{
  context.callbackWaitsForEmptyEventLoop = false;
  let body = event.body;
  let buff = new Buffer(body, 'base64');
  let text = buff.toString('ascii');
  text = JSON.parse(text)
  var email = text.email;
  var passwordSend = text.password;
  
  const sql = "select * from users WHERE Email= " + "'"+email+ "'";
  connection.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    if(res[0].Password === passwordSend){
      callback(null, res);
      return
    } else {
      callback(null, 'error');
      return
    }
    
  });
  
};