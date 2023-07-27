const db = require("../db/connection");

function findAllRoles() {
  return db.query("SELECT * FROM roles");
}

function findAllDepartments() {
  return db.query("SELECT * FROM departments");
}

function findAllEmployees() {
  return db.query("SELECT * FROM employees");
}

function findManagers(employee) {
  return db.query("SELECT * FROM employees WHERE !id = ?", employee);
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
