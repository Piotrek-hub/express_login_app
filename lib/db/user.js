const mongoose = require('mongoose');

const user = mongoose.model('User', { email: String, name: String, password: String });

module.exports = user