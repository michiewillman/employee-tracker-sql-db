# 12 SQL: Employee Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. This employee tracker is a command-line application built to manage a company's employee database, using Node.js, Inquirer, and MySQL. It also includes the dotenv package to protect sensitive database connection information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To view this application's repository code and try it for yourself, [click here.](https://github.com/michiewillman/employee-tracker-sql-db)

You can clone this repo from GitHub via SSH using the following command to use this application on your local machine.

```bash
git clone git@github.com:michiewillman/employee-tracker-sql-db.git
```

Install the dependencies:

```bash
npm install
```

Run MySQL in terminal, then enter your password.

```bash
mysql -u root -p
```

Source database schema file:

```bash
source <path to schema.sql>
```

Source database seeds:

```bash
source <path to seeds.sql>
```

Close the MySQL terminal and run the application in node:

```bash
node index.js
```

## Usage

For a video showing the application's functionality, [click here.](https://watch.screencastify.com/v/MQwLMNLOUSadPGlrghsk)

# Deployment

N/A - Because this is a command line appliation, there is not a deployed version.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT

For more information on this license, [click here.](https://opensource.org/license/https://opensource.org/licenses/MIT)

## Contributing

N/A

## Tests

N/A

## Questions

If you have any questions, please open an issue or contact me via email at [contact@michiewillman.com](mailto:contact@michiewillman.com).

You can view more of my work on GitHub [here](https://github.com/michiewillman).
