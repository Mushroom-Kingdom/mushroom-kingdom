const router = require("express").Router();
const mushroomController = require("../../controllers/mushroomController");

// Matches with "/api/mushroom"
router
  .route("/")
  .get(mushroomController.findAll)
  .post(mushroomController.create);

// Matches with "/api/mushroom/:id"
router
  .route("/:id")
  .get(mushroomController.findById)
  .put(mushroomController.update)
  .delete(mushroomController.remove);

module.exports = router;