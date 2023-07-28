const mysql = require("mysql2");
require("dotenv").config();

// Create connection to MySQL database
const connection = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  () => {
    console.log(`Connected to the database employee_db`);
  }
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
