const express = require('express');

const router = express.Router();
const articles = require('../db/articles');

/* GET articles listing. */
router.get('/', (req, res) => {
    articles.find({}, null, { lean: true }).then((articlesList) => {
        const arr = articlesList.map((elem) => {
            const article = Object.assign({}, elem);
            // eslint-disable-next-line no-underscore-dangle
            delete article._id;
            return article;
        });
        res.send(arr);
    }).catch(err => console.log(`Error in myArticles model: ${err}`));
});

/* Save new article */
router.post('/', (req, res) => {
    console.log('Post request');
    console.log(req.body);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', { domain: 'example.com', encode: String });
    res.status(200).send('article saved');
    res.end();
});

/* Update article */
router.put('/:articleId', (req, res) => {
    console.log('delete request');
    console.log('Request Id:', req.params.articleId);
    console.log(req.body);
    res.status(200).send('article updated');
});

/* Delete article */
router.delete('/:articleId', (req, res) => {
    console.log('delete request');
    console.log('Request Id:', req.params.articleId);
    console.log(req.body);
    res.status(200).send('article deleted');
});

// helloEndpoint = (num) => ({
//     serverMessage: `Hello from the server! (received ${num})`,
// });

// router.get('/:articleId', function (req, res, next) {
//     res.json(helloEndpoint(req.params.articleId));
//     console.log('Request Id:', req.params.articleId);
//     next();
// });

module.exports = router;
