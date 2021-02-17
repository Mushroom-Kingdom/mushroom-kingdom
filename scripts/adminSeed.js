const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

// need to update localhost address
mongoose.connect(
  process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(async response => {
    console.log("Connected to Database");
    let adminSeed = [];

    const hashedPassword = await bcrypt.hash("123456", 12);
    adminSeed = [
        {
            firstName: "Scott",
            lastName: "Nelson",
            email: "snelson.seattle@gmail.com",
            password: hashedPassword,
            isAdmin: true
        },
        {
            firstName: "Selma",
            lastName: "Elgabalawy",
            email: "salmosha88@gmail.com",
            password: hashedPassword,
            isAdmin: true
        },
        {
            firstName: "Paul",
            lastName: "Besliu",
            email: "besliu_marius@yahoo.com",
            password: hashedPassword,
            isAdmin: true
        },
        {
            firstName: "Nick",
            lastName: "Pasch",
            email: "paschnick100@gmail.com",
            password: hashedPassword,
            isAdmin: true
        },
        {
            firstName: "Linh",
            lastName: "Nguyen",
            email: "linhnhatmen@gmail.com",
            password: hashedPassword,
            isAdmin: true
        }
    ]

    db.Admin.remove({})
    .then(() => db.Admin.collection.insertMany(adminSeed))
    .then((data) => {
        console.log(data);
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
});

