const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static("public"));
require("./routes/api/books")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to database and then launch the webserver
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tudpv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(result => {
  console.log("Connected to database");
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server is now running on port ${PORT}!`);
  });
}).catch(err => {
  console.log(err);
});

