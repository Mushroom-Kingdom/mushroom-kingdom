const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes
app.use("/api/mushrooms", require("./routes/API/mushroomRoutes"));
app.use("/auth", require("./routes/Authentication/authRoutes"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to database and then launch the webserver

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mushroomdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to database successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, function () {
  console.log(`🌎 ==> Server is now running on port ${PORT}!`);
});
