const { prompt } = require("inquirer");
const { runAction } = require("./runAction");

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
function inquire() {
  prompt(actionPrompt).then((answers) => {
    runAction(answers).catch((err) => {
      console.log(err);
    });
  });
}

// Export to server.js
module.exports = { inquire };
