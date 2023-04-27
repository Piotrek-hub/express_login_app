const mongoose = require('mongoose');

const user = mongoose.model('User', { email: String, name: String, password: String });

const createUser = async (username, email, password) => {
    await new user({ email: email, name: username, password: password }).save()
}

const findOne = (email) => {
    return user.findOne({ email: email }).exec()
}

module.exports = { user, findOne, createUser }