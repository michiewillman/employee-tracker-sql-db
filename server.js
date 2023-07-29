const { prompt } = require("inquirer");
// const { viewAllEmployees , addRole} = require("./lib/actions");
const db =  require('./db/queries')

const actionPrompt = [
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
  prompt(actionPrompt).then((answers) => {
    switch (answers.action) {
      case "View all employees":
        viewAllEmployees();
        break;
      case "View all roles":
       viewAllRoles()
        break;
      case "View all departments":
        // Actions.findAllDepartments();
        break;
      case "Add employee":
        // Actions.insertEmployee();
        break;
      case "Add role":
        addRole()
        break;
      case "Add department":
        // Actions.insertDepartment();
        break;
      case "Update employee":
        // Actions.updateEmployee();
        break;
      default:
        process.exit();
    }
  });
}
askUser()

function viewAllEmployees() {
  db.findAllEmployees().then(([data]) => {
    console.table(data);
    askUser()
  });
}
function viewAllRoles() {
  db.findAllRoles().then(([data])=> {
    console.table(data)
    askUser()
  })
}

function veiwAllDepartments() {
  console.log(allDepartments);
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
      
      db.insertRole(res)
      askUser()
    });
  });
}

function addDepartment() {
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
