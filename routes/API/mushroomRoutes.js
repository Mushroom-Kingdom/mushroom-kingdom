const router = require("express").Router();
const mushroomController = require("../../controllers/mushroomController");
const adminAuth = require("../../middleware/auth");

// Matches with "/api/mushrooms"
router.get("/", mushroomController.findAll);

// Matches with "/api/mushrooms/:id"
router.get("/:id", mushroomController.findById);  

// Routes that need admin authentication
router.post("/", adminAuth, mushroomController.create);
router.put("/:id", adminAuth, mushroomController.update);
router.delete("/:id", adminAuth, mushroomController.remove);

module.exports = router;