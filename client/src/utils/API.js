import axios from "axios";

export default {
  // Gets all mushrooms
  getMushrooms: function () {
    return axios.get("/api/mushrooms/");
  },
  // Gets the mushroom with the given id
  getMushroomId: function (id) {
    return axios.get("/api/mushroom/" + id);
  },
  // Deletes the mushroom with the given id
  deleteMushroom: function (id) {
    return axios.delete("/api/mushroom/" + id);
  },
  // Saves a mushroom to the database
  saveMushroom: function (mushroomData) {
    return axios.post("/api/mushroom", mushroomData);
  },

  // AUTHENTICATION FUNCTIONS
  loginUser: function (userCredentials) {
    return axios.post("/auth/login", userCredentials);
  },

  // userData is an object with {firstName, lastName, email, password, passwordConfirm} fields
  createUser: function (userData) {
    return axios.post("/auth/signup", userData);
  },

  loginAdmin: function (adminCredentials) {
    return axios.post("/auth/admin/login", adminCredentials);
  },
};
