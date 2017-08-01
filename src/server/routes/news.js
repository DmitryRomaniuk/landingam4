const express = require('express');

const router = express.Router();
const news = require('../db/news');

/* GET news listing. */
router.get('/', (req, res) => {
    news.find({}, null, { lean: true }).then((newsList) => {
        const arr = newsList.map((elem) => {
            const oneNews = Object.assign({}, elem);
            // eslint-disable-next-line no-underscore-dangle
            delete oneNews._id;
            return oneNews;
        });
        res.send(arr);
    }).catch(err => console.log(`Error in myNews model: ${err}`));
});

/* Save new news */
router.post('/', (req, res) => {
    console.log('Post request');
    console.log(req.body);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', { domain: 'example.com', encode: String });
    res.status(200).send('news saved');
    res.end();
});

/* Update news */
router.put('/:newsId', (req, res) => {
    console.log('delete request');
    console.log('Request Id:', req.params.newsId);
    console.log(req.body);
    res.status(200).send('news updated');
});

/* Delete news */
router.delete('/:newsId', (req, res) => {
    console.log('delete request');
    console.log('Request Id:', req.params.newsId);
    console.log(req.body);
    res.status(200).send('news deleted');
});

module.exports = router;
