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

// Middleware to deal with CORS issues
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use(express.static("public"));
// require("./routes/api/books")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// API Routes
app.use("/api/mushrooms", require("./routes/API/mushroomRoutes"));
app.use("/auth", require("./routes/Authentication/authRoutes"));

// HTTP ERROR HANDLING MIDDLEWARE
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error has occurred!" });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to database and then launch the webserver

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mushroomdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

  .then((result) => {
    console.log("Connected to database");
    app.listen(PORT, function () {
      console.log(`🌎 ==> Server is now running on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
