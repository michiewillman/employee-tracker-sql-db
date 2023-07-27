const mysql = require("mysql2");

// Create connection to MySQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db",
  },
  () => {
    console.log(`Connected to the database employee_db`);
  }
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
