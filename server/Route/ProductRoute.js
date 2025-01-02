const express = require('express');
const ProductController = require('../Controller/ProductController');
const authMiddleware = require('../Middleware/authMiddleware');
const adminMiddleware = require('../Middleware/adminMiddleware');

const router = express.Router();

router.post('/createproduct', authMiddleware, adminMiddleware, ProductController.prodcutCreate)

module.exports = router;