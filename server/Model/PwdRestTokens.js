const mongoose = require('mongoose');

const PwdRestTokensSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true},
    expire_at: {type: Date, required: true},  
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const PwdRestTokens = mongoose.model('PwdRestTokens', PwdRestTokensSchema);

module.exports = PwdRestTokens;