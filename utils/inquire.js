const { prompt } = require("inquirer");
const { viewAllEmployees } = require("../lib/actions");

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
        findAllRoles();
        break;
      case "View all departments":
        findAllDepartments();
        break;
      case "Add employee":
        insertEmployee();
        break;
      case "Add role":
        insertRole();
        break;
      case "Add department":
        insertDepartment();
        break;
      case "Update employee":
        updateEmployee();
        break;
      default:
        process.exit();
    }
  });
}

askUser();
