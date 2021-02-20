const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mushroomSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    family: {
      type: String,
    },
    genus: {
      type: String,
    },
    species: {
      type: String,
    },
    price: {
      type: Number,
    },
    available: {
      type: Boolean,
    },
    toxic: {
      type: Boolean,
    }    
});

const mushroom = mongoose.model("mushroom", mushroomSchema);

module.exports = mushroom;
