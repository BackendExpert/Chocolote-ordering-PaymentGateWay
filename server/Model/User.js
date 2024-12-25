const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        Type: String,
        require: true,
        unique: true,
    },
    email: {
        Type: String,
        require: true,
        unique: true,
    },
    password: {
        Type: String,
        require: true,
    },
    role: {
        Type: String,
        require: true,
        default: "user"
    },
    address: {
        Type: String,
    },
    is_active: {
        Type: Boolean,
        require: true,
        default: true
    }
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;