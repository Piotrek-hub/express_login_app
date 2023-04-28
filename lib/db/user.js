const mongoose = require('mongoose');

const user = mongoose.model('User', { email: String, name: String, password: String, fiat125p: Number, lada1300: Number, dacia1300: Number, skoda_favorit: Number });

const createUser = async (username, email, password) => {
    await new user({ email: email, name: username, password: password, fiat125p: 0, lada1300: 0, dacia1300: 0, skoda_favorit: 0 }).save()
}

const findOne = (email) => {
    return user.findOne({ email: email }).exec()
}

const updatePageState = async (email, page)  => {
    const filter = { email:email}
    let doc = await user.findOne(filter)
    if(doc === null) {
        return null
    }

    console.log(Object.keys(doc))


    return user.updateOne(filter, {page: 2})
}

module.exports = { user, findOne, createUser, updatePageState }