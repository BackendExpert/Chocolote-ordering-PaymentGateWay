const express = require('express');
const AuthController = require('../Controller/AuthCotroller');

const router = express.Router();

router.post('/signup', AuthController.signup)
router.post('/signin', AuthController.signin)

module.exports = router;