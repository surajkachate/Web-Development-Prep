const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/authController");

router.post("/register", register);
router.get("/login", login);

module.exports = router;
