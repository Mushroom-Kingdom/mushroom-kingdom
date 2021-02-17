const router = require("express").Router();
const mushroomRoutes = require("./mushroom");

router.use("/mushroom", mushroomRoutes);

module.exports = router;
