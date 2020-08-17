// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout');

// routes
app.use(require("./routes/api.js"));

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});