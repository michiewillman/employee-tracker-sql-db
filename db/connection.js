const mysql = require("mysql2");

// Create connection to MySQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employees_db",
  },
  () => {
    console.log(`Connected to the database employees_db`);
  }
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
