const mysql = require("mysql2");
require("dotenv").config();

// Create connection to MySQL database
const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the books_db database.`)
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
