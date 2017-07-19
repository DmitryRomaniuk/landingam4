const express = require('express');
const router = express.Router();
const news = require('../db/news');

/* GET news listing. */
router.get('/', function (req, res) {
    news.find({}, null, {lean: true}).then(newsList => {
        const arr = newsList.map(elem => {
            const news = Object.assign({}, elem);
            delete news._id;
            return news;
        });
        res.send(arr);
    }).catch(err => console.log(`Error in myNews model: ${err}`));
});

/* Save new news */
router.post('/', function (req, res) {
    console.log('Post request');
    console.log(req.body);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', {domain: 'example.com', encode: String});
    res.status(200).send('news saved');
    res.end();
});

/* Update news */
router.put('/:newsId', function (req, res) {
    console.log('delete request');
    console.log('Request Id:', req.params.newsId);
    console.log(req.body);
    res.status(200).send('news updated');
});

/* Delete news */
router.delete('/:newsId', function (req, res) {
    console.log('delete request');
    console.log('Request Id:', req.params.newsId);
    console.log(req.body);
    res.status(200).send('news deleted');
});

module.exports = router;
