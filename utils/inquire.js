const { prompt } = require("inquirer");
const questions = require("../lib/questions");
const { findCase } = require("./findcase");

function inquire() {
  prompt(questions).then((answers) => {
    findCase(answers);
  });
}
