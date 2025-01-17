const mongoose = require('mongoose');

const PwdResetTokenSchema = new mongoose.Schema({

});

const PwdResetToken = mongoose.model('PwdResetToken', PwdResetTokenSchema);

module.exports = PwdResetToken;