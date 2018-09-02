require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_NAME}`;
mongoose.connect(uri, { useNewUrlParser: true })
    .then(function() {
    })
    .catch(function(error) {
        throw new Error(error);
    });
const db = mongoose.connection;
module.exports = db;
