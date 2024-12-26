const express = require('express');
const UserController = require('../Controller/UserController');

const router = express.Router();

router.get('/alluser', UserController.getusers)

module.exports = router;