const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const QuestionSchema = new Schema({
    title: String,
    slug: String,
    content: String,
    author: {},
    tags: [String],
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Model
const QuestionModel = mongoose.model('Question', QuestionSchema);

module.exports = QuestionModel;
