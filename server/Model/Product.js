const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true, default: 0 },
    brand: { type: String },
    imageUrl: { type: Number, required: true },
    weight: { type: String, required: true },
    status: { type: String, required: true, default: 'Out of Stock' },    
},{timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;