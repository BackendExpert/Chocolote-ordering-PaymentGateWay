const mongoose = require('mongoose');

const PwdResetTokenSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    token: { type: String, required: true, unique: true},
    expire_at: { 
        type: Date, 
        required: true,
        index: { expireAfterSeconds: 0}
    },
});

PwdResetTokenSchema.pre('save', async function (next) {
    if (!this.expire_at) {
        this.expire_at = new Date(Date.now() + 15 * 60 * 1000);
    }
    next();
});

const PwdResetToken = mongoose.model('PwdResetToken', PwdResetTokenSchema);
module.exports = PwdResetToken;