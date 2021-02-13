const mongoose = require("mongoose");
const db = require("../models");

// need to update localhost address
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mushroom",{
  useNewUrlParser: true,
  useFindAndModify: false
});

const mushroomSeed = [
  {
    mushroom: [
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
        available: " ",     //quantity of -> boolean true / false
        toxic: " "          //toxic of mushroom -> boolean true / false

      }
    ]
  },
];

db.mushroom.remove({})
  .then(() => db.mushroom.collection.insertMany(mushroomSeed))
  .then((data) => {
    console.log(data.result.n + "sale");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
