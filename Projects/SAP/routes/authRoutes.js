const express = require("express");
const router = express.Router();
const login = require("../controllers/authController");

router.post('/login', require(login));

module.exports = router;