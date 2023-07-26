const { prompt } = require("inquirer");
const questions = require("../lib/questions");

function ask() {
  prompt(questions);
}

module.exports = ask;
