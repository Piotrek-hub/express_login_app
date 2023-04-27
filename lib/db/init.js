const mongoose = require('mongoose');

const connection_uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"

const initDB = () => {
    mongoose.connect(connection_uri)
    console.log("CONNECTED TO DB")
}

module.exports = initDB