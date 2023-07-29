const connection = require("./connection");

// All actions available on the db connection
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // TODO: transform these functions into promises? async/await
  findAllRoles() {
    return connection.promise().query("SELECT * FROM roles");
  }

  findAllDepartments() {
    return connection.promise().query("SELECT * FROM departments");
  }

  findAllEmployees() {
    return connection.promise().query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name as DepartmentName, roles.salary  FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;");
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
      "INSERT INTO roles SET ?",
      role);
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
module.exports = new DB(connection);
