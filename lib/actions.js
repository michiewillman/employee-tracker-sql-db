const { DB } = require("../db/queries");

const allEmployees = DB.findAllEmployees();
const allDepartments = DB.findAllDepartments();
const allRoles = DB.findAllRoles();

class Actions {
  viewAllEmployees() {
    console.log(allEmployees);
  }
  viewAllRoles() {
    console.log(allRoles);
  }
  veiwAllDepartments() {
    console.log(allDepartments);
  }

  addEmployee() {
    prompt(
      [
        {
          name: "firstName",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "lastName",
          type: "input",
          message: "What is the employee's last name?",
        },
        {
          name: "role",
          type: "list",
          message: "What is the employee's role?",
          choices: map(allRoles),
        },
        {
          name: "manager",
          type: "list",
          message: "Who is their manager?",
          choices: map(allEmployees),
          // update this later to exclude the employee themselves as their manager
        },
      ]
        .then((res) => {
          // TODO: fix role & manager logic
          let employee = {
            first_name: res.first_name,
            last_name: res.last_name,
            role_id: res.role_id,
            manager_id: res.manager_id,
          };
          DB.insertEmployee(employee);
          res.json(`Employee has been added.`);
        })
        .then(prompt(mainPrompt))
        .catch(error)
    );
  }

  addRole() {
    prompt([
      {
        name: "title",
        type: "input",
        message: "What is the role title?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary?",
      },
      {
        name: "department",
        type: "list",
        message: "What is the department?",
        choices: map(allDepartments),
      },
    ]).then((res) => {
      let role = {
        title: res.title,
        salary: res.salary,
        department: res.department,
      };
      DB.insertRole(role);
    });
  }

  addDepartment() {
    prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department?",
        choices: map(allDepartments),
      },
    ]).then((department) => {
      DB.insertDepartment(department);
    });
  }

  updateEmployeeRole() {
    prompt([
      {
        name: "employeeId",
        type: "input",
        message: "What is the employee's id?",
      },
      {
        name: "newRole",
        type: "list",
        message: "What is their new role?",
        choices: map(allRoles),
      },
    ]).then((res) => {
      // TODO: fix role & logic
      let employee = {
        id: res.id,
        role_id: res.role_id,
      };
      DB.updateEmployee(employee);
    });
  }
}

module.exports = { Actions };
