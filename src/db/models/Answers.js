const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const AnswerSchema = new Schema({
    author: String,
    content: String,
}, {
    timestamps: true
});

// Model
const AnswerModel = mongoose.model('Answer', AnswerSchema);

module.exports = AnswerModel;
