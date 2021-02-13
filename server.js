const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();

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
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(result => {
  console.log("Connected to database");
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server is now running on port ${PORT}!`);
  });
}).catch(err => {
  console.log(err);
});

