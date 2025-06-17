const express = require('express');
const router = express.Router();
const { register, registerAdmin, login } = require('../controllers/userController');

router.post('/register', register);
router.post('/register-admin', registerAdmin)
router.post('/login', login);

module.exports = router;