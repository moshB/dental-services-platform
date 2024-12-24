const express = require('express');
const { searchClinicsWithRadius } = require('../controllers/clinicsController');

const router = express.Router();

// נתיב חיפוש
router.post('/search', searchClinicsWithRadius);

module.exports = router;
