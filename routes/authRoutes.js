const express = require('express');
const { 
    register, 
    login, 
    getMe, 
    logout 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { registerSchema, loginSchema } = require('../validations/authSchema');

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/logout', logout);
router.get('/me', protect, getMe);

module.exports = router;
