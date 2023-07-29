const connection = require("./connection");

// All actions available on the db connection
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllRoles() {
    return connection
      .promise()
      .query(
        "SELECT role.title, role.id, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id"
      );
  }

  findAllDepartments() {
    return connection
      .promise()
      .query("SELECT department.name, department.id FROM departments");
  }

  findAllEmployees() {
    return connection
      .promise()
      .query(
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name as department, roles.salary, CONCAT(employees.first_name, ' ', employees.last_name) AS manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employees AS manager ON employees.manager_id = employees.id"
      );
  }

  findManagers(employee) {
    return connection
      .promise()
      .query(
        "SELECT id, first_name, last_name FROM employees WHERE id != ?",
        employee
      );
  }

  insertEmployee(employee) {
    return connection.promise().query("INSERT INTO employees SET ?", employee);
  }

  insertRole(role) {
    return connection.promise().query("INSERT INTO roles SET ?", role);
  }

  insertDepartment(department) {
    return connection
      .promise()
      .query("INSERT INTO departments SET ?", department);
  }

  updateEmployee(employee) {
    // return connection.promise().query(
    //   "SELECT * FROM employees WHERE id = ?",
    //   employee);
    console.log("Logic still needed");
  }
}

module.exports = new DB(connection);
