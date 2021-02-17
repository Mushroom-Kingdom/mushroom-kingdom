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

        name: "Pink Oyster",          //name of mushroom
        image_url: "placeholderURL.com",     //image of mushroom 
        description: "Part of the Pleurotaceae family, they share much of the qualities of their siblings, the Blue and Gold Oyster mushrooms. They are very healthy overall and highly nutritious. Their use in recipes is vast: pasta, soup, stir fry and many other dishes can be enhanced with these mushrooms because they hold so much flavor.",   //description of mushroom
        family: "Pleurotaceae",        //family of mushroom
        genus: "Pleurotus",         //genus of mushroom
        species: "Djamor",       //species of mushroom
        price: "10",         //price of mushroom -> integer
        available: "True",     //quantity of -> boolean true / false
        toxic: "False"          //toxic of mushroom -> boolean true / false
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
