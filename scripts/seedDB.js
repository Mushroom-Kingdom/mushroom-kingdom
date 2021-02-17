const mongoose = require("mongoose");
const db = require("../models");
const dotenv = require("dotenv").config();

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

    name: "Blue Oyster",          //name of mushroom
    image_url: "placeholderURL.com",     //image of mushroom 
    description: "Blue Oyster mushrooms are part of the Pleurotaceae family along with their siblings, the Gold and Pink Oyster mushrooms! They are very healthy, containing high amounts of niacin, riboflavin and pantothenic acid. On top of this, they are nearly fat free and high in protein. These mushrooms, being the superfood that they are, are very fortunately highly dynamic with regard to their uses in the kitchen.",   //description of mushroom
    family: "Pleurotaceae",        //family of mushroom
    genus: "Pleurotus",         //genus of mushroom
    species: "Columbinus",       //species of mushroom
    price: 10,         //price of mushroom -> integer
    available: true,     //quantity of -> boolean true / false
    toxic: false          //toxic of mushroom -> boolean true / false

  },
  {

    name: " ",          //name of mushroom
    image_url: " ",     //image of mushroom 
    description: " ",   //description of mushroom
    family: " ",        //family of mushroom
    genus: " ",         //genus of mushroom
    species: " ",       //species of mushroom
    price: " ",         //price of mushroom -> integer
    available: " ",     //quantity of -> boolean true / false
    toxic: " "          //toxic of mushroom -> boolean true / false

  },

  {

    name: " ",          //name of mushroom
    image_url: " ",     //image of mushroom 
    description: " ",   //description of mushroom
    family: " ",        //family of mushroom
    genus: " ",         //genus of mushroom
    species: " ",       //species of mushroom
    price: " ",         //price of mushroom -> integer
    quantity_available: " ",    //quantity of mushroom -> integer
    toxic: " "                  //toxic of mushroom -> booleantrue / false

  }
];

db.Mushroom.deleteMany({})
  .then(() => db.Mushroom.collection.insertMany(mushroomSeed))
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
