const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const db = require("../models");

// need to update localhost address
mongoose.connect(
  process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const mushroomSeed = [  
  {
    name: "White Mushroom",          //name of mushroom
    image_url: "whitemushroom.jpg",     //image of mushroom 
    description: "A white mushroom",   //description of mushroom
    family: "Mushroom Family",        //family of mushroom
    genus: "Mushroom Genus",         //genus of mushroom
    species: "Mushroom Species",       //species of mushroom
    price: 10,         //price of mushroom -> integer
    available: true,     //quantity of -> boolean true / false
    toxic: false          //toxic of mushroom -> boolean true / false
  },
  {
    name: "Brown Mushrom",          //name of mushroom
    image_url: "brownmushroom.jpg",     //image of mushroom 
    description: "A brown mushroom",   //description of mushroom
    family: "Mushroom family",        //family of mushroom
    genus: "Mushroom Genus",         //genus of mushroom
    species: "Mushroom Species",       //species of mushroom
    price: 10,         //price of mushroom -> integer
    available: true,     //quantity of -> boolean true / false
    toxic: false          //toxic of mushroom -> boolean true / false
  }
];

db.Mushroom.remove({})
  .then(() => db.Mushroom.collection.insertMany(mushroomSeed))
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
