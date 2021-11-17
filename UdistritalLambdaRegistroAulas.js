/*const mysql= require('mysql');
var connection = mysql.createConnection({
        host     : 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user     : 'j0infk1wdruxowkq',
        password : 'xkasgvnq85t96knq',
        database : 'e9ijtk28jgdrt7ri',
        port:3306
    });
    connection.connect(error => {
        if (error) throw error;
        console.log("Successfully connected to the database.");
    });
exports.handler = async (event) => {
    
    var classroom = {
        Id_faculty: 1,
        Description: 'B1 101',
        Tier: '1',
        Classroom: '101',
        Observation: 'salon para clases magistrales',
        MaxCapacity: '30'
    }
    connection.query("INSERT INTO classrooms SET ?", classroom, (err, data) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    if (data.length) {
      console.log("result", data[0]);
      return;
    }
  });
};

*/

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
  var classroom = {
        Id_faculty: 1,
        Description: 'B1 103',
        Tier: '1',
        Classroom: '102',
        Observation: 'salon para clases magistrales',
        MaxCapacity: '2'
    }
  connection.query("INSERT INTO classrooms SET ?", classroom, (err, data) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    callback(null, 'Se registro valor.');
  });
};