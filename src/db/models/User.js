const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const UserSchema = new Schema({
    email: String,
    name: String,
    social: {
        github: String,
    }
}, {
    timestamps: true
});

// Model
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
