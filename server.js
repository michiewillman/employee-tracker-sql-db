const express = require("express");
const inquire = require("./utils/inquire");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start questions
inquire();

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

init();
