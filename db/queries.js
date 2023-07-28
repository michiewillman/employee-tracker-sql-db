const connection = require("./connection");

// All actions available on the db connection
class DB {
  findAllRoles() {
    return connection.query("SELECT * FROM roles", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  findAllDepartments() {
    return connection.query("SELECT * FROM departments", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  findAllEmployees() {
    return connection.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  findManagers(employee) {
    return connection.query(
      "SELECT * FROM employees WHERE !id = ?",
      employee,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }

  insertEmployee(employee) {
    return connection.query(
      "INSERT INTO employees () VALUES ?",
      employee,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }

  insertRole(role) {
    return connection.query(
      "INSERT INTO roles () VALUES ?",
      role,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }

  insertDepartment(department) {
    return connection.query(
      "INSERT INTO departments () VALUES ?",
      department,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }

  updateEmployee(employee) {
    return connection.query(
      "SELECT * FROM employees WHERE id = ?",
      employee,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }
}

// Export queries to use in actions.js
module.exports = { DB, connection };
