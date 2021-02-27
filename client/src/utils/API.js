import axios from "axios";

export default {
  // Gets all mushrooms
  getMushrooms: function () {
    return axios.get("/api/mushrooms/");
  },
  // Gets the mushroom with the given id
  getMushroomId: function (id) {
    return axios.get("/api/mushrooms/" + id);
  },
  // Deletes the mushroom with the given id, requires authentication
  deleteMushroom: function (id, token) {
    return axios.delete("/api/mushrooms/" + id, {
      headers: { authorization: `BEARER ${token}`}
    });
  },
  editMushroom: function (mushroomData, token) {
    return axios.put(`/api/mushrooms/${mushroomData._id}`, mushroomData, {
      headers: { authorization: `BEARER ${token}`}
    });
  },
  // Saves a mushroom to the database
  saveMushroom: function (mushroomData, token) {
    return axios.post("/api/mushrooms/", mushroomData, {
      headers: { authorization: `BEARER ${token}`}
    });
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

  passwordReset: function (email) {
    return axios.post("/auth/resetpassword", email);
  },

  uploadImage: function (formData) {
    return axios.post(
      "https://api.cloudinary.com/v1_1/djdhvwysz/image/upload",
      formData
    );
  },
};
