const { prompt } = require("inquirer");
const db = require("./db/queries");

const mainAction = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "View all roles",
      "View all departments",
      "Add employee",
      "Add role",
      "Add department",
      "Update employee",
      "Quit",
    ],
  },
];

// Ask user for main action choice
// Then find the switch case that matches
function askUser() {
  prompt(mainAction).then((answers) => {
    switch (answers.action) {
      case "View all employees":
        viewAllEmployees();
        break;
      case "View all roles":
        viewAllRoles();
        break;
      case "View all departments":
        veiwAllDepartments();
        break;
      case "Add employee":
        addEmployee();
        break;
      case "Add role":
        addRole();
        break;
      case "Add department":
        addDepartment();
        break;
      case "Update employee":
        updateEmployee();
        break;
      default:
        process.exit();
    }
  });
}

// Ask user for main action choice on load
askUser();

function viewAllEmployees() {
  db.findAllEmployees().then(([data]) => {
    console.table(data);
    askUser();
  });
}

function viewAllRoles() {
  db.findAllRoles().then(([data]) => {
    console.table(data);
    askUser();
  });
}

function veiwAllDepartments() {
  db.findAllDepartments().then(([data]) => {
    console.table(data);
    askUser();
  });
}

function addEmployee() {
  db.findAllRoles().then(([data]) => {
    const roleData = data.map(({ title, id }) => ({
      title: title,
      value: id,
    }));
    db.findAllEmployees().then(([data]) => {
      const managerData = data.map(({ first_name, last_name, id }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
      }));

      prompt(
        [
          {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?",
          },
          {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
          },
          {
            name: "title",
            type: "list",
            message: "What is the employee's role?",
            choices: roleData,
          },
          {
            name: "manager_id",
            type: "list",
            message: "Who is their manager?",
            choices: managerData,
          },
        ]
          .then((res) => {
            db.insertEmployee(res);
            res.json(`Employee has been added.`);
          })
          .then(prompt(mainPrompt))
          .catch((error) => {
            console.status(404).json(`Sorry, error adding employee.`);
          })
      );
    });
  });
}

function addRole() {
  db.findAllDepartments().then(([data]) => {
    const departmentData = data.map(({ name, id }) => ({
      name: name,
      value: id,
    }));
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
  db.findAllRoles().then(([data]) => {
    const roleData = data.map(({ name, id }) => ({
      title: name,
      value: id,
    }));
  });
  prompt([
    {
      name: "id",
      type: "input",
      message: "What is the employee's id?",
    },
    {
      name: "title",
      type: "list",
      message: "What is their new role?",
      choices: roleData,
    },
  ]).then((res) => {
    db.updateEmployee(res);
  });
}
