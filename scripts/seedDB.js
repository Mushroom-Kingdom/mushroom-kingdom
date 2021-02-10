const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const mushroomSeed= [
  {
    day: new Date().setDate(new Date().getDate()-10),
    mushroom: [
      {
        type: "",
        name: " ",
        toxic: false,
        
      }
    ]
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(mushroomSeed))
  .then((data) => {
    console.log(data.result.n + "sale");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
