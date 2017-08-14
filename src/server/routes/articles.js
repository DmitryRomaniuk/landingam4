const express = require('express');

/* eslint-disable no-underscore-dangle */
const router = express.Router();
const articles = require('../db/articles');

/* GET articles listing. */
router.get('/', (req, res) => {
    articles.find({}, null, { lean: true }).then((articlesList) => {
        const arr = articlesList.map((elem) => {
            const article = Object.assign({}, elem);
            article.id = article._id;
            delete article._id;
            return article;
        });
        res.send(arr);
    }).catch(err => console.log(`Error in myArticles model: ${err}`));
});

/* Save new article */
router.post('/', (req, res) => {
    console.log('Post request');
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', { domain: 'example.com', encode: String });
    articles.insertMany(
        [req.body],
        (err, updatedArticle) => {
            if (err) {
                return res.status(501).send('article don\'t save ' + err);
            }
            const articleMap = Object.assign({}, updatedArticle);
            articleMap['0'] = articleMap['0'] || {};
            const article = Object.assign({}, JSON.parse(JSON.stringify(articleMap['0'])));
            article.id = article._id;
            delete article._id;
            delete article.__v;
            return res.status(201).json(article);
        },
    );
});

/* Update article */
router.put('/:articleId', (req, res) => {
    console.log('delete request');
    console.log('Request Id:', req.params.articleId);
    console.log(req.body);
    // res.status(200).send('article updated');
    articles.findByIdAndUpdate(
        { _id: req.params.articleId },
        req.body, // document to insert
        { upsert: false, new: false, runValidators: true },
        (err, updatedArticle) => {
            if (err) {
                return res.status(501).send('article don\'t updated ' + err);
            }
            const articleMap = Object.assign({}, updatedArticle);
            articleMap._doc = articleMap._doc || {};
            const article = Object.assign({}, JSON.parse(JSON.stringify(articleMap._doc)));
            article.id = article._id;
            delete article._id;
            delete article.__v;
            return res.status(201).json(article);
        },
    );
});

/* Delete article */
router.delete('/:articleId', (req, res) => {
    console.log('delete request');
    console.log('Request Id:', req.params.articleId);
    articles.findByIdAndRemove(
        { _id: req.params.articleId },
        {}, // options
        (err, deletedArticle) => {
            if (err) {
                return res.status(501).send('article don\'t deleted');
            }
            const articleMap = Object.assign({}, deletedArticle);
            articleMap._doc = articleMap._doc || {};
            const article = Object.assign({}, JSON.parse(JSON.stringify(articleMap._doc)));
            // eslint-disable-next-line no-underscore-dangle
            article.id = article._id;
            // eslint-disable-next-line no-underscore-dangle
            delete article._id;
            delete article.__v;
            return res.status(201).json(article);
        },
    );
});
/* eslint-enable no-underscore-dangle */

module.exports = router;
