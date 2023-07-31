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
        "SELECT role.title, role.id, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id"
      );
  }

  findAllDepartments() {
    return connection
      .promise()
      .query("SELECT department.name, department.id FROM department");
  }

  findAllEmployees() {
    return connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
      );
  }

  findManagers(employee) {
    return connection
      .promise()
      .query(
        "SELECT id, first_name, last_name FROM employee WHERE id != ?",
        employee
      );
  }

  insertEmployee(employee) {
    return connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  insertRole(role) {
    return connection.promise().query("INSERT INTO role SET ?", role);
  }

  insertDepartment(department) {
    return connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  // Update an employee's role
  updateEmployee(employee) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        employee.role_id,
        employee.id,
      ]);
  }
}

module.exports = new DB(connection);
