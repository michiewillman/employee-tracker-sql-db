const db = require("./connection");

// All actions available on the db connection
function findAllRoles() {
  return db.query("SELECT * FROM roles", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
}

function findAllDepartments() {
  return db.query("SELECT * FROM departments", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
}

function findAllEmployees() {
  return db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
}

function findManagers(employee) {
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

function insertEmployee(employee) {
  return db.query("INSERT INTO employees () VALUES ()");
}

function insertRole(role) {
  return db.query("INSERT INTO roles () VALUES ()");
}

function insertDepartment(department) {
  return db.query("INSERT INTO departments () VALUES ()");
}

function updateEmployee(employee) {
  return db.query("SELECT * FROM employees WHERE ");
}

// Export queries to use in actions.js
module.exports = {
  findAllRoles,
  findAllDepartments,
  findAllEmployees,
  findManagers,
  insertEmployee,
  insertRole,
  insertDepartment,
  updateEmployee,
};
