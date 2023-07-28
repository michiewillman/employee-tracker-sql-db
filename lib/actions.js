const { DB } = require("../db/queries");

function viewAllEmployees() {
  DB.findAllEmployees();
}
function viewAllRoles() {
  DB.findAllRoles();
}
function veiwAllDepartments() {
  DB.findAllDepartments();
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
        choices: DB.findAllRoles(),
      },
      {
        name: "manager",
        type: "list",
        message: "Who is their manager?",
        choices: DB.findManagers(),
      },
    ]
      .then((res) => {
        DB.insertEmployee(res.);
        res.json(`Employee has been added.`);
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
      choices: DB.findAllDepartments(),
    },
  ])

    .then((res) => {
      let role = {
        title: res.title,
        salary: res.salary,
        department: res.department
      }
      DB.insertRole(role);
    });
}

function addDepartment() {
  prompt([
    {
      name: "department",
      type: "input",
      message: "What is the name of the department?",
      choices: DB.findAllDepartments(),
    },
  ])
    // let department = {};
    .then((department) => {
      DB.insertDepartment(department);
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
      choices: DB.findAllRoles(),
    },
  ])
    // let employee = {}
    .then((employee) => {
      DB.updateEmployee(employee);
    });
}

function quit() {
  // End application
}

module.exports = userAction;
