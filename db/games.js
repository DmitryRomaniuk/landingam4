const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const games = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
    platforms: { type: Array },
    likes: { type: Number },
    comments: { type: String },
    rating: { type: Number },
}, { collection: 'games' });

const myGames = mongoose.model('myGames', games);

module.exports = myGames.find({})
    .then(function (data) {
        // console.log(data);
        return data;
    })
    .catch(err => console.log(`Error in myGames model: ${err}`));