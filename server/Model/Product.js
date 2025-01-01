const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;