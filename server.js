const express = require("express");
// const action = require("./lib/actions");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
