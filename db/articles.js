const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articles = new Schema({
    title: { type: String },
    description: { type: String },
    text: { type: String },
    avatarUrl: { type: String },
    likes: { type: Number },
    comments: { type: String },
    date: { type: Date },
    author: { type: String },
}, { collection: 'articles' });

const myArticles = mongoose.model('myArticles', articles);

module.exports = myArticles;