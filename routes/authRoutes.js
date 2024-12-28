const express = require('express');
const router = express.Router();

const { handleUserSignup } = require('../controllers/authController');




router.post('/register', handleUserSignup);

module.exports = router;