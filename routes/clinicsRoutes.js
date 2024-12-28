const express = require('express');
const { searchClinicsWithRadius } = require('../controllers/clinicsController');
const { getClinicById } = require('../controllers/clinicsController');
const router = express.Router();

// נתיב חיפוש
router.post('/search', searchClinicsWithRadius);
router.post('/details', getClinicById);





module.exports = router;
