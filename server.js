const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models/");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
htmlRoutes(app);
apiRoutes(app);
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds143131.mlab.com:43131/heroku_4vscr7lc", {
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});