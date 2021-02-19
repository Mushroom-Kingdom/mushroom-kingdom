import axios from "axios";

export default {
  
  // Gets all mushrooms
  getMushrooms: function() {
    return axios.get("/api/mushrooms/");
  },

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // },


  // AUTHENTICATION FUNCTIONS
  loginUser: function(userCredentials){
    return axios.post("/auth/login", userCredentials);
  },

  // userData is an object with {firstName, lastName, email, password, passwordConfirm} fields
  createUser: function(userData) {
    return axios.post("/auth/signup", userData);
  },

  loginAdmin: function(adminCredentials) {
    return axios.post("/auth/admin/login", adminCredentials);
  }

};
