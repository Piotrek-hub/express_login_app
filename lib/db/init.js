const mongoose = require('mongoose');

const connection_uri = "mongodb://127.0.0.1:27017/express_app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0"

const initDB = () => {
    mongoose.connect(connection_uri)
}

module.exports = initDB