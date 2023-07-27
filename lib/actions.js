const {
  findAllRoles,
  findAllDepartments,
  findAllEmployees,
  findManagers,
  insertEmployee,
  insertRole,
  insertDepartment,
  updateEmployee,
} = require("../db/queries");

function viewAllEmployees() {
  findAllEmployees();
}
function viewAllRoles() {
  findAllRoles();
}
function veiwAllDepartments() {
  findAllDepartments();
}

function addEmployee() {
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
        choices: findAllRoles(),
      },
      {
        name: "manager",
        type: "list",
        message: "Who is their manager?",
        choices: findManagers(),
      },
    ]
      .then((answers) => {
        insertEmployee(answers);
        res.json(`Employee has been added.`);
        // View employees table
      })
      .then(prompt(mainPrompt))
      .catch(error)
  );
}

function addRole() {
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
      choices: findAllDepartments(),
    },
  ])
    // let role = {}
    .then((role) => {
      insertRole(role);
    });
}

function addDepartment() {
  prompt([
    {
      name: "department",
      type: "input",
      message: "What is the name of the department?",
      choices: findAllDepartments(),
    },
  ])
    // let department = {};
    .then((department) => {
      insertDepartment(department);
    });
}

function updateEmployeeRole() {
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
      choices: findAllRoles(),
    },
  ])
    // let employee = {}
    .then((employee) => {
      updateEmployee(employee);
    });
}

function quit() {
  // End application
}

module.exports = userAction;
