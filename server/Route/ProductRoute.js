const express = require('express');
const ProductController = require('../Controller/ProductController');
const authMiddleware = require('../Middleware/authMiddleware');
const adminMiddleware = require('../Middleware/adminMiddleware');
const upload = require('../Middleware/uploadMiddleware');

const router = express.Router();

router.post('/createproduct', authMiddleware, adminMiddleware, upload.single('image'), ProductController.prodcutCreate)
router.get('/allproduct', authMiddleware, adminMiddleware, ProductController.getAllProduct)

module.exports = router;