const express = require('express');
const ProductController = require('../Controller/ProductController');

const router = express.Router();

router.post('/createproduct', ProductController.prodcutCreate)

module.exports = router;