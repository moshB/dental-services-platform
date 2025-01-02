// const express = require('express');
// const router = express.Router();

// const { handleUserSignup } = require('../controllers/authController');




// router.post('/register', handleUserSignup);

// module.exports = router;
const express = require('express');
const router = express.Router();

const { 
    handleUserSignup, 
    handleUserLogin, 
    handleUserLogout, 
    checkUserSession, 
    getUserProfile 
} = require('../controllers/authController');

// רישום משתמש חדש
router.post('/register', handleUserSignup);

// התחברות משתמש
router.post('/login', handleUserLogin);

// יציאת משתמש
router.post('/logout', handleUserLogout);

// בדיקת סשן משתמש
router.get('/session', checkUserSession);

// קבלת פרופיל משתמש
router.get('/profile', getUserProfile);

module.exports = router;
