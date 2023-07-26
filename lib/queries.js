const db = require("../db/connection");

function findAllRoles() {
  return db.query();
}

function findAllDepartments() {
  return db.query();
}

function findAllEmployees() {
  return db.query();
}

function findManagers(employee) {
  return db.query();
}

function insertEmployee(employee) {
  return db.query();
}

function insertRole(role) {
  return db.query();
}

function insertDepartment(department) {
  return db.query();
}

function updateEmployee(employee) {
  return db.query();
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
