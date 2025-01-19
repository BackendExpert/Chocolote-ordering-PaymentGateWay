const express = require('express');
const AuthController = require('../Controller/AuthCotroller');

const router = express.Router();

router.post('/signup', AuthController.signup)
router.post('/signin', AuthController.signin)
router.post('/passreset', AuthController.passreset)
router.post('/updatepass/:token', AuthController.resetpassword)
router.get('/checktoken/:tolen', AuthController.istokennotexpired)

module.exports = router;