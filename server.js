// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const port = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static pages
app.use(express.static("public"));

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout');

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});