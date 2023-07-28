const Actions = require("../lib/actions");

// Switch cases for user chosen action
function runAction(answers) {
  switch (answers.action) {
    case "View all employees":
      Actions.findAllEmployees();
      break;
    case "View all roles":
      Actions.findAllRoles();
      break;
    case "View all departments":
      Actions.findAllDepartments();
      break;
    case "Add employee":
      Actions.insertEmployee();
      break;
    case "Add role":
      Actions.insertRole();
      break;
    case "Add department":
      Actions.insertDepartment();
      break;
    case "Update employee":
      Actions.updateEmployee();
      break;
    case "Quit":
      process.exit();
  }
}

module.exports = { runAction };
