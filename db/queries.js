const db = require("./connection");

// All actions available on the db connection
class DB {
  findAllRoles() {
    return db.query("SELECT * FROM roles", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  findAllDepartments() {
    return db.query("SELECT * FROM departments", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  findAllEmployees() {
    return db.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  findManagers(employee) {
    return db.query(
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
    return db.query("INSERT INTO employees () VALUES ()");
  }

  insertRole(role) {
    return db.query("INSERT INTO roles () VALUES ()");
  }

  insertDepartment(department) {
    return db.query("INSERT INTO departments () VALUES ()");
  }

  updateEmployee(employee) {
    return db.query("SELECT * FROM employees WHERE ");
  }
}

// Export queries to use in actions.js
module.exports = { DB };
