const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const news = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
}, { collection: 'news' });

const myNews = mongoose.model('myNews', news);

module.exports = myNews.find({})
    .then(function (data) {
        // console.log(data);
        return data;
    })
    .catch(err => console.log(`Error in myNews model: ${err}`));