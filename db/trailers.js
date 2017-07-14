const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailers = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
}, { collection: 'trailers' });

const myTrailers = mongoose.model('myTrailers', trailers);

module.exports = myTrailers.find({})
    .then(function (data) {
        // console.log(data);
        return data;
    })
    .catch(err => console.log(`Error in myTrailers model: ${err}`));