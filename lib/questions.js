const mainPrompt = [
  {
    type: "list",
    name: "choice",
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

// Switch cases
// TODO: needs logic to inact cases
switch (choice) {
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
    quit();
}
