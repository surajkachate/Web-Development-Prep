const express = require('express');
const router = express.router();
const login = require('./controllers/login');

router.post('/login', require(login));