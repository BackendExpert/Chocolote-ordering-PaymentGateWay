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

const PwdResetToken = mongoose.model('PwdResetToken', PwdResetTokenSchema);
module.exports = PwdResetToken;