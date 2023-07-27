const db = require("../db/connection");

function findAllRoles() {
  return db.query("SELECT * FROM role");
}

function findAllDepartments() {
  return db.query("SELECT * FROM department");
}

function findAllEmployees() {
  return db.query("SELECT * FROM employee");
}

function findManagers(employee) {
  return db.query("SELECT * FROM employee WHERE !id = ?", employee);
}

function insertEmployee(employee) {
  return db.query("INSERT INTO employee () VALUES ()");
}

function insertRole(role) {
  return db.query("INSERT INTO role () VALUES ()");
}

function insertDepartment(department) {
  return db.query("INSERT INTO department () VALUES ()");
}

function updateEmployee(employee) {
  return db.query("SELECT * FROM employee WHERE ");
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
