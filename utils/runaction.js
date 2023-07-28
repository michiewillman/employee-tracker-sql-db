const actions = require("../lib/actions");

// Switch cases for user chosen action
function runAction(answers) {
  switch (answers.action) {
    case "View all employees":
      findAllEmployees();
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
    case "Quit":
      process.exit();
  }
}

module.exports = { runAction };
