const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productID: { type: String, required: true, unique: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true, default: 0 },
    brand: { type: String },
    imageUrl: { type: String, required: true },
    weight: { type: String, required: true },
    status: { type: String, required: true, default: 'In Stock' },    
},{timestamps: true });

// Middleware to automatically update status based on stockQuantity
ProductSchema.pre('save', function (next) {
    if (this.stockQuantity === 0) {
        this.status = 'Out of Stock';
    } else {
        this.status = 'In Stock';
    }
    next();
});

// Middleware for updates to reflect stock changes
ProductSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();

    // Check if stockQuantity is being updated
    if (update.$set && update.$set.stockQuantity !== undefined) {
        if (update.$set.stockQuantity === 0) {
            this.getUpdate().$set.status = 'Out of Stock';
        } else {
            this.getUpdate().$set.status = 'In Stock';
        }
    }
    next();
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;