const router = require("express").Router();
const auth = require("../../controllers/authController");
const { check } = require("express-validator");


// Admin Login
router.post("/admin/login", auth.adminLogin);

// Register a new user account
router.post(
    "/signup",
    [
    check("firstName").notEmpty(),
    check("lastName").notEmpty(),
    check("email").normalizeEmail(),
    check("email").isEmail(),
    check("password").isLength({min: 6}),
    check("passwordConfirm").isLength({min: 6})
    ],
    auth.signup);

// User Login
router.post("/login", auth.login);



module.exports = router;