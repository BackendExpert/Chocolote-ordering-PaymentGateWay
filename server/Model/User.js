const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true, default: "user" },  
    address: {type: String }
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;