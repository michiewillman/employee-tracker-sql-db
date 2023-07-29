const db = require("../db/queries");
const {prompt} = require('inquirer')

function viewAllEmployees() {
  db.findAllEmployees()
  .then(([data]) => {
    console.table(data);
  })
  .then(prompt(mainPrompt))
}
function viewAllRoles() {
  db.findAllRoles()
  .then(([data]) => {
    console.table(data);
  })
  .then(prompt(mainPrompt))
}

function veiwAllDepartments() {
  db.findAllDepartments()
  .then(([data]) => {
    console.table(data)
  })
  .then(prompt(mainPrompt))
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
        choices: ,
      },
      {
        name: "manager",
        type: "list",
        message: "Who is their manager?",
        choices: ,
        // update this later to exclude the employee themselves as their manager
      },
    ]
      .then((res) => {
        db.insertEmployee(res);
        res.json(`Employee has been added.`);
      })
      .then(prompt(mainPrompt))
      .catch((error) => {
        console.status(404).json(`Sorry, there has been an error adding the employee.`)
      })
  );
}

function addRole() {
  db.findAllDepartments().then(([data]) => {
    const departmentData = data.map(({ name, id }) => ({
      name: name,
      value: id,
    }));
  });
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
      name: "department_id",
      type: "list",
      message: "What is the department?",
      choices: departmentData,
    },
  ]).then((res) => {
    db.insertRole(res);
  });
}

function addDepartment() {
  prompt([
    {
      name: "department",
      type: "input",
      message: "What is the name of the department?",
    },
  ]).then((res) => {
    db.insertDepartment(res);
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
      choices: ,
    },
  ]).then((res) => {
    db.updateEmployee(res);
  });
}

module.exports = { viewAllEmployees, addRole };
