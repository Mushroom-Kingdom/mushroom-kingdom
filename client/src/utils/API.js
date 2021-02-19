import axios from "axios";

export default {
  // Mushroom Requests  
  getMushrooms: function() {
    return axios.get("/api/mushrooms/");
  },
  // Gets the mushroom with the given id
  getMushroomById: function(id) {
    return axios.get("/api/mushrooms/" + id);
  },
  // Deletes the mushroom with the given id
  deleteMushroom: function(id) {
    return axios.delete("/api/mushrooms/" + id);
  },
  // Saves a mushroom to the database
  saveMushroom: function(mushroomData) {
    return axios.post("/api/mushrooms/", mushroomData);
  },


  // Authentication Requests
  loginUser: function(userCredentials){
    return axios.post("/auth/login", userCredentials);
  },

  // userData is an object with {firstName, lastName, email, password, passwordConfirm} fields
  createUser: function(userData) {
    return axios.post("/auth/signup", userData);
  },

  loginAdmin: function(adminCredentials) {
    return axios.post("/auth/admin/login", adminCredentials);
  },

  passwordReset: function(email) {
    return axios.post("/auth/resetpassword", email);
  }

};
