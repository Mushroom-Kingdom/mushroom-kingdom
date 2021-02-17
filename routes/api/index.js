const router = require("express").Router();
const mushroomRoutes = require("./mushroom");

// Book routes
router.use("/mushroom", mushroomRoutes);

module.exports = router;
