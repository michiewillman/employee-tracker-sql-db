const { prompt } = require("inquirer");
const db = require("./db/queries");

const mainPrompt = [
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
  prompt(mainPrompt).then((answers) => {
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
        updateEmployeeRole();
        break;
      default:
        process.exit();
    }
  });
}

// Ask user for main action choice on load
askUser();

function viewAllEmployees() {
  db.findAllEmployees()
    .then(([data]) => {
      console.table(data);
      askUser();
    })
    .catch((error) => {
      console.log(error);
    });
}

function viewAllRoles() {
  db.findAllRoles()
    .then(([data]) => {
      console.table(data);
      askUser();
    })
    .catch((error) => {
      console.log(error);
    });
}

function veiwAllDepartments() {
  db.findAllDepartments()
    .then(([data]) => {
      console.table(data);
      askUser();
    })
    .catch((error) => {
      console.log(error);
    });
}

async function addEmployee() {
  try {
    const [roleData, managerData] = await Promise.all([
      db
        .findAllRoles()
        .then(([data]) =>
          data.map(({ title, id }) => ({ name: title, value: id }))
        ),
      db.findAllEmployees().then(([data]) =>
        data.map(({ first_name, last_name, id }) => ({
          name: `${first_name} ${last_name}`,
          value: id,
        }))
      ),
    ]);

    const res = await prompt([
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
        name: "role_id",
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
    ]);
    await db.insertEmployee(res);
    console.log(`Employee has been added.`);
    askUser();
  } catch (error) {
    console.log(error);
  }
}

async function addRole() {
  try {
    const departmentData = await db.findAllDepartments().then(([data]) =>
      data.map(({ name, id }) => ({
        name: name,
        value: id,
      }))
    );
    const res = await prompt([
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
    ]);
    await db.insertRole(res);
    console.log("Role has been added.");
    askUser();
  } catch (error) {
    console.log(error);
  }
}

async function addDepartment() {
  try {
    const res = await prompt({
      name: "name",
      type: "input",
      message: "What is the name of the department?",
    });
    db.insertDepartment(res);
    console.log("Department has been added.");
    askUser();
  } catch (error) {
    console.log(error);
  }
}

async function updateEmployeeRole() {
  try {
    const roleData = await db.findAllRoles().then(([data]) => {
      data.map(({ name, id }) => ({
        title: name,
        value: id,
      }));
    });
    const res = await prompt([
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
    ]);
    await db.updateEmployee(res);
    console.log("Employee has been updated.");
    askUser();
  } catch (error) {
    console.log(error);
  }
}
