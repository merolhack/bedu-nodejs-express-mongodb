const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const TagSchema = new Schema({
    name: String,
}, {
    timestamps: true
});

// Model
const TagModel = mongoose.model('Tag', TagSchema);

module.exports = TagModel;
