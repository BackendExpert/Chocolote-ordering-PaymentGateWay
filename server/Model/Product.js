const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productID: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true, default: 0 },
    brand: { type: String },
    imageUrl: { type: String, required: true },
    weight: { type: String, required: true },
    status: { type: String, required: true, default: 'In Stock' },
}, { timestamps: true });

// Pre-save middleware for new or updated documents
ProductSchema.pre('save', function (next) {
    console.log('Pre-save middleware triggered');
    if (this.stockQuantity === 0) {
        this.status = 'Out of Stock';
    } else {
        this.status = 'In Stock';
    }
    next();
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
