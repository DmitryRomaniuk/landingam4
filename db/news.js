const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const news = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
}, { collection: 'news' });

const myNews = mongoose.model('myNews', news);

module.exports = myNews;
