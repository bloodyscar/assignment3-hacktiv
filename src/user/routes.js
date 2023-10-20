const { Router } = require('express');
const { loginUser, registerUser } = require('./controller');
const router = Router();
const jwt = require('jsonwebtoken');
const { verifikasiToken } = require('../../middleware');

router.post('/login', loginUser)
router.post('/register', registerUser)

module.exports = router;