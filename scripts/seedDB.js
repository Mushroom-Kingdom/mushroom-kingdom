const mongoose = require("mongoose");
const db = require("../models");

// need to update localhost address
mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tudpv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const mushroomSeed = [
  {
    mushroom: [
      {

        name: "Blue Oyster",          //name of mushroom
        image_url: "placeholderURL.com",     //image of mushroom 
        description: "Blue Oyster mushrooms are part of the Pleurotaceae family along with their siblings, the Gold and Pink Oyster mushrooms! They are very healthy, containing high amounts of niacin, riboflavin and pantothenic acid. On top of this, they are nearly fat free and high in protein. These mushrooms, being the superfood that they are, are very fortunately highly dynamic with regard to their uses in the kitchen.",   //description of mushroom
        family: "Pleurotaceae",        //family of mushroom
        genus: "Pleurotus",         //genus of mushroom
        species: "Columbinus",       //species of mushroom
        price: "10",         //price of mushroom -> integer
        available: "True",     //quantity of -> boolean true / false
        toxic: "False"          //toxic of mushroom -> boolean true / false

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
